'use strict';

let sec1_height = document.querySelector('#section1').scrollHeight;
let sec2_height = document.querySelector('#section2').scrollHeight;
let sec3_height = document.querySelector('#section3').scrollHeight;
let sec4_height = document.querySelector('#section4').scrollHeight;
const sec1_img = document.querySelector('#section1 img');
const sec2_imgs = document.querySelectorAll('#section2 img');
const sec3_cards = document.querySelectorAll('#section3 .card');
const sec4_imgs = document.querySelectorAll('#section4 img');

let onewheel;

function addActiveClass(el) {
  el.classList.add('active');
}

addActiveClass(sec1_img);

window.addEventListener('scroll', function () {
  clearTimeout(onewheel);

  onewheel = setTimeout(function () {
    let scrollY = window.scrollY;

    sec2_imgs.forEach(sec2_img => {
      addActiveClass(sec2_img);
    });

    if (scrollY > sec2_height + sec3_height / 3) {
      sec3_cards.forEach(sec3_card => {
        addActiveClass(sec3_card);
      });
    }

    if (scrollY > sec2_height + sec3_height) {
      sec4_imgs.forEach(sec4_img => {
        addActiveClass(sec4_img);
      });
    }
  }, 10);
});
