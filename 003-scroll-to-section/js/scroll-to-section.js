const menus = document.querySelectorAll('header a');
const underline = document.getElementById('underline');
const sections = document.querySelectorAll('section');
let secOffsetTop;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = displayUnderline(0);

menus.forEach((menu, index) => {
  menu.addEventListener('click', function (e) {
    e.preventDefault;
    console.log(index);
    displayUnderline(index);
    secOffsetTop = sections[index].offsetTop;
    window.scrollTo({
      top: secOffsetTop,
      behavior: 'smooth',
    });
  });
});

function displayUnderline(index) {
  underline.style.left = menus[index].offsetLeft + 'px';
  underline.style.width = menus[index].offsetWidth + 'px';
  underline.style.top =
    menus[index].offsetTop + menus[index].offsetHeight + 'px';
}
