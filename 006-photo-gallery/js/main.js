// Variable declaration
const menus = document.querySelectorAll('.nav > ul > li');
const main = document.querySelector('main');
const description = document.querySelector('.description');
const descLength = document.querySelector('.descLength');
// console.log(descLength);
let mainClassName;
let letterNum;

// Menu: add underline
menus.forEach(menu =>
  menu.addEventListener('click', () => {
    // console.log(menu);
    removeUnderline();
    menu.classList.add('on');
    showContent(menu);
  })
);

// Menu: remove underline
function removeUnderline() {
  menus.forEach(menu => {
    menu.classList.remove('on');
  });
}

// Menu: move to different pages
function showContent(menu) {
  mainClassName = menu.className.split(' ')[0];
  main.className = '';
  main.classList.add(mainClassName);
  // console.log(main);
}

// Upload photo page: count letters
description.addEventListener('keyup', () => {
  console.log(description.value.length);
  descLength.innerHTML = `${description.value.length}/20`;
});
