//if와 '?'를 사용한 조건 처리

//'if'문
let year = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year == 2015) {
  alert("정답입니다!");
  alert("아주 똑똑하시네요!");
}

// 0은 falsy이므로 절대 실행되지 않음.
if (0) {
}

// 1은 truthy이므로 항상 실행됨.
if (1) {
}

let cond = year == 2015; // 동등 비교를 통해 true/false 여부를 결정

if (cond) {
}

// 'else'절
if (year == 2015) {
  alert("정답입니다!");
} else {
  alert("오답입니다!"); // 2015 이외의 값을 입력한 경우
}

// 'else if'로 복수 조건 처리하기
if (year < 2015) {
  alert("숫자를 좀 더 올려보세요.");
} else if (year > 2015) {
  alert("숫자를 좀 더 내려보세요.");
} else {
  alert("정답입니다!");
}

// 조건부 연산자 '?'
let accessAllowed;
let age = prompt("나이를 입력해주세요.", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// 조건부 연산자를 이용해 위 if문을 짧고 간결하게 변형
age > 18 ? (accessAllowed = true) : (accessAllowed = false);

// 다중 '?'
let message =
  age < 3
    ? "아가야 안녕?"
    : age < 18
    ? "안녕!"
    : age < 100
    ? "환영합니다!"
    : "나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!";

alert(message);

// 위에 조건부 연산자를 if-else문으로 변경
if (age < 3) {
  message = "아기야 안녕?";
} else if (age < 18) {
  message = "안녕!";
} else if (age < 100) {
  message = "환영합니다!";
} else {
  message = "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!";
}
