
function onHit(event) {
    let audio = document.querySelector(`audio[data-hit-code="${event.keyCode}"]`);
    let key = document.querySelector(`.hit[data-hit-code="${event.keyCode}"]`);
    console.log(key);
    if (!audio) return; // Preventing the wrong hit!
    audio.currentTime = 0; //it rewinds the hit from the beginning
    audio.play()
    key.classList.add('play');
}

const keys = document.querySelectorAll('.hit');
keys.forEach(hit => hit.addEventListener('transitionend', removeTransition)); // this handles the transition on the keys and when the transition ends it calls the function
// We use .forEach because we can't listen to a whole array of elements

function removeTransition(event){                         // this function will remove the transition once finished
    if(event.propertyName !== 'transform') return;        // this skip it is not a transform
    this.classList.remove('play');                        // this removed the CSS class .play
} 

let buttons = document.querySelectorAll(`.hit`);
buttons.forEach(hit => hit.addEventListener('click', onClick));

// to play it on phone
buttons.forEach(hit => hit.addEventListener('touchstart', onClick));

// Use mouse to play
function onClick(event){
    const keyCode = this.getAttribute('data-hit-code');
    const audio = document.querySelector(`audio[data-hit-code="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.hit[data-hit-code="${keyCode}"]`);
    key.classList.add('play');
}

window.addEventListener('keydown', onHit);  // Just listen the keyboard
