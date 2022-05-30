// IntersectionObserver
// 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰
// 요소가 뷰포트에 포함되는지 포함되지 않는지를 구별
// 사용자 화면에 지금 보이는 요소인지 아닌지를 구별
// 비동기적으로 실행되기 때문에 scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용

// new IntersectionObserver 생성자는 2개의 인수(callback, options)을 가짐
// new IntersectionObserver((entries, observer) => {}, options)

// 1. callback
// (entries, observer) => {}
// 관찰할 대상(Element)가 화면에 보이면(isIntersecting이 true면) callback을 실행
// 콜백은 2개의 인수(entries, observer)를 가짐
// 1) entries
// entries는 IntersectionObserverEntry 인스턴스의 배열
// - boundingClientRect: 관찰 대상의 사각형 정보(DOMRectReadOnly)
// - intersectionRect: 관찰 대상의 교차한 영역 정보(DOMRectReadOnly)
// - intersectionRatio: 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
// - isIntersecting: 관찰 대상의 교차 상태(Boolean)
// - target: 관찰 대상 요소(Element)
// 2) observer

// 2. options
// 1) rootMargin: 바깥 여백(Margin)을 이용해 Root 범위를 확장하거나 축소
// 2) threshold: 옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시

// 기존에 있는 요소를 observe하기
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  // 관찰할 대상(Element)당 하나의 IntersectionObserverEntry 배열을 가지게 된다
  entries.forEach(
    entry => {
      console.log(entry);
      entry.target.classList.toggle('show', entry.isIntersecting);
      // 요소가 화면에 보여지면 관찰을 중지
      if (entry.isIntersecting) observer.unobserve(entry.target);
    },
    {
      rootMargin: '-100px',
      threshold: 1,
    }
  );
});

cards.forEach(card => {
  // 관찰할 대상(Element)을 지정
  observer.observe(card);
});

// 새로운 요소를 만들면서 observe하기
const lastCardObserver = new IntersectionObserver(
  entries => {
    const lastCard = entries[0];
    // 마지막 카드가 화면에 보이지 않으면 종료 (=새카드를 만들지 않음)
    if (!lastCard.isIntersecting) return;
    // 마지막 카드가 화면에 보일때만 새카드를 만듬
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector('.card:last-child'));
  },
  {
    rootMargin: '100px',
  }
);

lastCardObserver.observe(document.querySelector('.card:last-child'));

const cardContainer = document.querySelector('.card-container');
function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'New Card';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
}
