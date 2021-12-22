// variable declaration
let num = 0;
let delta, oneWheel;
let count = $('section').length;

// nav creation
for (let i = 0; i < count; i++) {
  $('aside').append('<a></a>');
}
$('aside a').eq(0).addClass('active');

// click event
$('aside a').on('click', function () {
  num = $(this).index();
  scrollSection();
});

// mousewheel event
$(window).on('mousewheel DOMMouseScroll', function (e) {
  delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  clearTimeout(oneWheel);

  oneWheel = setTimeout(function () {
    if (delta < 0) {
      if (num != count - 1) num++;
    } else {
      if (num != 0) num--;
    }
    scrollSection();
  }, 80);
});

// function is executed after mousewheel and click event occured
function scrollSection() {
  $('main').css({
    transform: `translateY(-${100 * num}vh)`,
  });
  $('aside a').removeClass('active');
  $('aside a').eq(num).addClass('active');
}
