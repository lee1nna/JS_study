// 반복문의 마지막 값
let i = 3;

while (i) {
  alert(i--);
} // 마지막으로 뜨는 값 = 1, 0은 false여서 실행되지 않음.

// while 반복문의 출력값 예상하기
let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4 출력

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5 출력

// for 반복문의 출력값 예상하기
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4 출력
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4 출력

// for 반복문을 이용하여 짝수 출력하기
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) alert(i);
}

// for 반복문을 while 반복문으로 바꾸기
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);

// 소수 출력하기
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert(i);
}
