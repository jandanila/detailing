// script.js
window.onscroll = function() {makeSticky()};

var header = document.querySelector('header');
var sticky = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}