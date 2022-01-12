// window.scrollY: 맨위부터 스크롤이 일어난거리까지
// Element.scrollHeight: 엘리먼트 컨텐츠의 총길이
// document.documentElement.scrollHeight: document 즉 <html> 엘리먼트 컨텐츠의 총길이
// window.innerHeight: vh

let clear;
let figure = document.querySelectorAll('figure');
console.log(figure);
let vh = window.innerHeight;

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;

  clearTimeout(clear);
  clear = setTimeout(function () {
    figure.forEach(function (element, index) {
      // console.log(
      //   `index: ${index}, scrollY: ${scrollY}, element.offsetTop: ${
      //     element.offsetTop
      //   }, vh: ${vh}, figure: ${Math.floor(element.offsetTop - vh)}, ${
      //     scrollY > element.offsetTop - vh
      //   }`
      // );

      if (scrollY > element.offsetTop - vh) {
        element.classList.add('active');
      }
    });
  }, 50);
});
