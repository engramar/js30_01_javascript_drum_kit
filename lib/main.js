'use strict';

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
}

window.addEventListener('keydown', playSound);