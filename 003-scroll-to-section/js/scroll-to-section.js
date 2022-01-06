// variable declaration
const menus = document.querySelectorAll('header a');
const underline = document.getElementById('underline');
const sections = document.querySelectorAll('section');
let secOffsetTop;

// window starts from position(0, 0) wherever it's loaded
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// when window is loaded, execute displayUnderline function passing parameter 0
// parameter 0 will be used for displaying underline on first menu
window.onload = displayUnderline(0);

// when each menu is clicked
// 1. execute displayUnderline function
// 2. scroll to section
menus.forEach((menu, index) => {
  menu.addEventListener('click', function (e) {
    e.preventDefault;
    displayUnderline(index);
    secOffsetTop = sections[index].offsetTop;
    window.scrollTo({
      top: secOffsetTop,
      behavior: 'smooth',
    });
  });
});

// Underline will be moved to the menu accordingly
function displayUnderline(index) {
  underline.style.left = menus[index].offsetLeft + 'px';
  underline.style.width = menus[index].offsetWidth + 'px';
  underline.style.top =
    menus[index].offsetTop + menus[index].offsetHeight + 'px';
}
