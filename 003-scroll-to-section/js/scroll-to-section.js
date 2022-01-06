// variable declaration
const menus = document.querySelectorAll('header a');
const underline = document.getElementById('underline');
const sections = document.querySelectorAll('section');
let secOffsetTop;
let oneWheel;

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

// When user scrolls to the section, underline displays on the menu
window.addEventListener('scroll', function () {
  clearTimeout(oneWheel);
  oneWheel = setTimeout(function () {
    const scrolled = window.scrollY;
    const innerHeight = window.innerHeight;
    if (scrolled === 0) {
      displayUnderline(0);
    }
    if (scrolled > innerHeight / 2) {
      displayUnderline(1);
    }
    if (scrolled > innerHeight + innerHeight / 2) {
      displayUnderline(2);
    }
  }, 80);
});
