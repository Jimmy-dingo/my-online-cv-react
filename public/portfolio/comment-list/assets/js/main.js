// we simulate getting data from DB/SERVER/API
function getDataFromDB() {
  //***** How it was - DATABASE SIMULATION LIST COMMENS - ************/
  // return [
  //   { id: '1', title: 'JS is amazing', body: 'JS is amazing and so easy to learn. I like it a lot!', author: 'CB' },
  //   {
  //     id: '2',
  //     title: 'DOM manipulation is easy',
  //     body:
  //       'DOM Manipulation using JS is straightforward and fun! You can intercept user actions and change things in the HTML and also in CSS.',
  //     author: 'Anonymous',
  //   },
  //   {
  //     id: '3',
  //     title: 'CSS is nice',
  //     body: 'To style your HTML page is so much fun! I like playing with colosand images!',
  //     author: 'AB',
  //   },
  //   {
  //     id: '4',
  //     title: 'Ana are mere',
  //     body: 'this is my awesome comment',
  //     author: 'John',
  //   },
  // ];
  //*******************************************************************/

  //*** Using the fetch function, taking the comments from JSON placeholder ***/
  var root = 'https://jsonplaceholder.typicode.com';

  fetch(root + '/comments?_limit=20&fbclid=IwAR1BDF_b9Q5SE1qmqamofcLDPEGALEihM2_vyW3ptu4RuxzT3CE575QtjaA', {  
    method: 'GET'
  })
    .then(function(response){
      return response.json();
    })
    .then(function(jsonResp){
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
    
        // parent.appendChild(element) will insert element at the end of parent
        $comments.appendChild($article);
      }
    })
  }
//***************************************************************************/

// We set a convention
// All variables that container a DOM element
// should start with $
var $comments = document.querySelector('.comments');

function createCommentElement(title, comment, author, index) {
  // we create an article element
  var $article = document.createElement('article');
  // console.dir($article);

  // 1. create header element with text
  var $header = document.createElement('header');
  $header.innerText = title;
  // 2. add header element to $article
  $article.appendChild($header);
  // 3. create p elmenet with class commnet and text
  var $p = document.createElement('p');
  $p.innerText = comment;
  $p.classList.add('comment');
  // 4. add p element to $article
  $article.appendChild($p);
  // 5. create footer element with text
  var $footer = document.createElement('footer');
  $footer.innerText = author;
  // 6. add footer element to $article
  $article.appendChild($footer);

  //************add remove and like button****************/
  // 7. remove button
  var $deleteBtn = document.createElement('button');
  $deleteBtn.classList.add('delete-btn'); 
  $deleteBtn.innerText = "Delete";
  $article.appendChild($deleteBtn);
  // attribute on remove button
  $deleteBtn.setAttribute('id', 'comment-id');
  // event listener on button
  $deleteBtn.addEventListener('click', deleteComment);

  // 8. like button
  var $likeBtn = document.createElement('button');
  $likeBtn.classList.add('like-btn'); 
  $likeBtn.innerText = "Like!";
  $article.appendChild($likeBtn);
  // attribute on remove button
  $likeBtn.setAttribute('id', 'like-id');
  // event listener on button that returns the number of likes
  $likeBtn.addEventListener('click', function(){
    return showCommentIndex(index)
  });

  //******************************************************/
  return $article;
}                                     

//****************add remove and like button********************/
//function delete connected to the event handler of the button
function deleteComment(){
  var currentElement = this.parentElement;   // 'this' returns the button element/to which I put eventListener
  currentElement.remove();
  reloadComments();
};      


function reloadComments(comments) {
  console.log('document is reloaded');
  // get comments from db
  var comments = getDataFromDB();
  console.log(comments);
  // comments iteration 
  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    console.log(comment);
  }
}

// show how many comments on index function
function showCommentIndex(index){
  console.log(index);
}


//button identification
var $deleteBtn = document.querySelectorAll('[comment-id]');
console.log($deleteBtn);

//**************************************************************/


var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');

function addComment(event) {
  console.log('add comment');
  // we stop the submit event form happening
  event.preventDefault();
  console.dir(event);
  console.log($title.value);
  console.log($comment.value);
  console.log($author.value);

  var $article = createCommentElement($title.value, $comment.value, $author.value);

  // parent.appendChild(element) will insert element at the end of parent
  $comments.appendChild($article);
}

$searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
  console.log(event);
  console.log($searchInput.value);
}

function onSearchInputChange(event) {
  console.log(event);
  console.log($searchInput.value);
}

// event which triggers when document is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('document is loaded');
  // get comments from db
  var comments = getDataFromDB();
  console.log(comments);

  var $form = document.querySelector('form');
  $form.addEventListener('submit', addComment);

  $searchButton = document.querySelector('.search');
  $searchButton.addEventListener('click', onSearch);
  
  // input event triggres when typing in the input field or when it changes
  $searchInput.addEventListener('input', onSearchInputChange)
});
