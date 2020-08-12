function getDataFromDB() {
  //*** Using the fetch function, taking the comments from JSON placeholder ***/
  var root = 'https://jsonplaceholder.typicode.com';

  fetch(root + '/comments?_limit=20&fbclid=IwAR1BDF_b9Q5SE1qmqamofcLDPEGALEihM2_vyW3ptu4RuxzT3CE575QtjaA', {
    method: 'GET'
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResp) {
      console.log(jsonResp);
      var comment = jsonResp;
      return comment;
    })
    //**** List the comments only after the database commens are loaded ****/
    .then(function listComments(jsonResp) {
      for (var i = 0; i < jsonResp.length; i++) {
        var comment = jsonResp[i];
        console.log(comment);

        var $article = createCommentElement(comment.name, comment.body, comment.email, i);

        $comments.appendChild($article);
      };
    });
};
//***************************************************************************/

var $comments = document.querySelector('.comments');

function createCommentElement(title, comment, author, index) {
  var $article = document.createElement('article');

  var $header = document.createElement('header');
  $header.innerText = title;

  $article.appendChild($header);

  var $p = document.createElement('p');
  $p.innerText = comment;
  $p.classList.add('comment');

  $article.appendChild($p);

  var $footer = document.createElement('footer');
  $footer.innerText = author;

  $article.appendChild($footer);

  //************add remove and like button****************/
  var $deleteBtn = document.createElement('button');
  $deleteBtn.classList.add('delete-btn');
  $deleteBtn.innerText = "Delete";
  $article.appendChild($deleteBtn);

  $deleteBtn.setAttribute('id', 'comment-id');
  $deleteBtn.addEventListener('click', deleteComment);

  var $likeBtn = document.createElement('button');
  $likeBtn.classList.add('like-btn');
  $likeBtn.innerText = "Like!";
  $article.appendChild($likeBtn);

  $likeBtn.setAttribute('id', 'like-id');
  $likeBtn.addEventListener('click', function () {
    return showCommentIndex(index);
  });
  //******************************************************/

  return $article;
};

//****************add remove and like button********************/
function deleteComment() {
  var currentElement = this.parentElement;
  currentElement.remove();
  reloadComments();
};


function reloadComments(comments) {
  console.log('document is reloaded');

  var comments = getDataFromDB();
  console.log(comments);

  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    console.log(comment);
  };
};

function showCommentIndex(index) {
  console.log(index);
};

var $deleteBtn = document.querySelectorAll('[comment-id]');
console.log($deleteBtn);

//**************************************************************/


var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');

function addComment(event) {
  console.log('add comment');

  event.preventDefault();
  console.dir(event);
  console.log($title.value);
  console.log($comment.value);
  console.log($author.value);

  var $article = createCommentElement($title.value, $comment.value, $author.value);

  $comments.appendChild($article);
};

$searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
  console.log(event);
  console.log($searchInput.value);
};

function onSearchInputChange(event) {
  console.log(event);
  console.log($searchInput.value);
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('document is loaded');

  var comments = getDataFromDB();
  console.log(comments);

  var $form = document.querySelector('form');
  $form.addEventListener('submit', addComment);

  $searchButton = document.querySelector('.search');
  $searchButton.addEventListener('click', onSearch);

  $searchInput.addEventListener('input', onSearchInputChange);
});