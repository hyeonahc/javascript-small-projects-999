// Import stylesheets
import './style.css';
import renderList from './listRenderer';

// Write Javascript code!
const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

// const onScroll = e => {
//   console.dir(e.target.scrollingElement);
//   console.log(
//     e.target.scrollingElement.scrollHeight,
//     e.target.scrollingElement.scrollTop,
//     e.target.scrollingElement.clientHeight
//   );
//   const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
//   if (scrollTop + clientHeight === scrollHeight) {
//     fetchMore();
//   }
// };

// document.addEventListener('scroll', onScroll);

// onScroll 이벤트로 fetchMore() 함수를 실행할때 문제점
// scroll을 한번 할때마다 코드가 실행된다면 메모리 낭비가 심해진다 (성능저하)
// 사용자가 scoll을 할때마다 이벤트가 발생하는 것이 아닌 필요할때만 scroll 이벤트가 발생한다면 메모리 낭비를 줄일 수 있다

// 연속으로 발생하는 이벤트 처리방법
// throattle: 일정시간간격으로 한번만 실행
// debounce: 마지막 한번만 실행

const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
  if (isIntersecting) fetchMore();
});
fetchMoreObserver.observe(fetchMoreTrigger);

fetchMore();
