const menus = document.querySelectorAll('.nav > ul > li');
const description = document.querySelector('.description');

menus.forEach(menu => {
  menu.addEventListener('click', () => setMenu(menu.className.split(' ')[0]));
});

function setMenu(_menu) {
  menus.forEach(menu => {
    menu.classList.remove('on');
  });
  document.querySelector('nav > ul > li.' + _menu).classList.add('on');
  document.querySelector('main').className = _menu;
}

setMenu('upload');

description.addEventListener('keyup', () => {
  document.querySelector('.descLength').innerHTML =
    description.value.length + '/20';
});
