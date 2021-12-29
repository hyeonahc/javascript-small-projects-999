// variable declaration
const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const aside = document.querySelector('aside');
let num = 0;
let delta, oneWheel;
let count = sections.length;

// nav creation
for (let i = 0; i < count; i++) {
  let a = document.createElement('a');
  aside.append(a);
}

// add active class to first a tag
let navs = document.querySelectorAll('aside a');
navs[0].classList.add('active');

// click event
navs.forEach((nav, index) => {
  nav.addEventListener('click', function () {
    num = index;
    scrollSection(num);
  });
});

// mousewheel event
window.addEventListener('mousewheel', function (e) {
  delta = e.wheelDelta;

  clearTimeout(oneWheel);

  oneWheel = setTimeout(function () {
    if (delta < 0) {
      if (num != count - 1) num++;
    } else {
      if (num != 0) num--;
    }
    scrollSection(num);
  }, 80);
});

// function is executed after click and mousewheel event occured
function scrollSection() {
  main.style.transform = `translateY(-${100 * num}vh)`;
  navs.forEach(nav => {
    nav.classList.remove('active');
  });
  navs[num].classList.add('active');
}
