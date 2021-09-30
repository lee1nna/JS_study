// 함수

function showMessage() {
  alert("안녕하세요!");
}

showMessage();

// 지역 변수

function showMessage() {
  let message = "안녕하세요!"; // 지역 변수, 함수 내에서만 접근 가능

  alert(message);
}

showMessage(); // 안녕하세요!

alert(message); // Error

// 외부 변수
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John

function showMessage() {
  userName = "Bob";
  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // 함수 호출 전이므로 John이 출력
showMessage();
alert(userName); // 함수에 의해 Bob으로 값이 바뀜

function showMessage() {
  let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언

  let message = "Hello, " + userName; // Bob
  alert(message);
}

showMessage(); // 함수는 내부 변수인 userName만 사용
alert(userName); // 함수는 외부 변수에 접근하지 않음. 따라서 값이 변경되지 않고, John 출력

// 매개 변수
function showMessage(from, text) {
  // 인수:from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello!
showMessage("Ann", "What's up?"); // Ann: What's up?

function showMessage(from, text) {
  from = "*" + from + "*"; // 'from'을 좀 더 멋있게 꾸며줌.

  alert(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 전역변수 "from"의 값은 변경되지 않음.
alert(from); //Ann

// 기본값

showMessage("Ann"); // 두번째 인수에 값 전달 안했으므로 두번째 값은 undefined

function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction()은 text값이 없을 때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
}

// 반환 값
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

let age = prompt("나이를 알려주세요", 18);

if (checkAge(age)) {
  alert("접속 허용");
} else {
  alert("접속 차단");
}

// return만 명시하는 경우
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("영화 상영");
}

// 함수 이름 짓기
// "get…" – 값을 반환함
// "calc…" – 무언가를 계산함
// "create…" – 무언가를 생성함
// "check…" – 무언가를 확인하고 불린값을 반환함

// 함수 == 주석
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i); // 소수
  }
}

//위 함수를 밑에 두 함수로 쪼개기
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
