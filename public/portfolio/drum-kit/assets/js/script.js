function onHit(event) {
  let audio = document.querySelector(`audio[data-hit-code="${event.keyCode}"]`);
  let key = document.querySelector(`.hit[data-hit-code="${event.keyCode}"]`);
  console.log(key);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play()
  key.classList.add('play');
}

const keys = document.querySelectorAll('.hit');
keys.forEach(hit => hit.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('play');
}

let buttons = document.querySelectorAll(`.hit`);
buttons.forEach(hit => hit.addEventListener('click', onClick));

function onClick(event) {
  const keyCode = this.getAttribute('data-hit-code');
  const audio = document.querySelector(`audio[data-hit-code="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.hit[data-hit-code="${keyCode}"]`);
  key.classList.add('play');
}

window.addEventListener('keydown', onHit);
