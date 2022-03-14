let target = document.querySelector('#dynamic');
// dynamic이라는 아이디를 가진 엘러먼트를 target이라는 변수에 넣음

function randomString() {
  let stringArr = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript',
    'React',
    'Python',
    'Git',
    'Visual Studio',
    'Slack',
    'Mac Lover 😄',
    'Adobe Photoshop',
    'Adobe XD',
  ];
  // stringArr에 문자열 5개를 배열형태로 넣음
  console.log(stringArr);

  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // StringArr에 있는 배열을 랜덤하게 가져와 selecString에 넣음
  console.log(selectString);

  let selectStringArr = selectString.split('');
  // 랜덤하게 가져온 문자열을 ""기준으로(한글자씩) 다시 배열로 만듬
  // i.e.) Learn to HTML -> "L" "e" "a" "r"...
  console.log(selectStringArr);

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle('active');
}
setInterval(blink, 500);

/* 주석 */
// Math.random()
// returns a random number between 0(inclusive), and 1(exclusive):
// 0부터 0.999...까지

// Math.random() * arrayLength
// arrayLength가 5개이면 Math.random()으로 나오는 결과값은 무조건 5미만이다
// 0부터 4.999...까지

// Math.floor()
// 소수점을 버리고 정수로 만드는 Math의 메소드

// Math.floor(Math.random())
// 0

// Math.floor(Math.random() * 5)
// 0, 1, 2, 3, 4
