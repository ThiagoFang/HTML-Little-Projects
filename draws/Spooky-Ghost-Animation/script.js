const ghost = document.querySelector('.spooky');
const ghostShadow = document.querySelector('.shadow');


setInterval(() => {
  ghost.classList.toggle('bad');
  ghostShadow.classList.toggle('bad');
}, 10000)