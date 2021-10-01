// 함수 표현식

// 함수 선언문 방식 사용
function sayHi() {
  alert("Hello");
}

// 함수 표현식 방식 사용
let sayHi = function () {
  alert("Hello");
};

function sayHi() {
  alert("Hello");
}

alert(sayHi); // sayHi 옆에 괄호가 없기 때문에 함수가 호출되지 않고 함수 코드가 보임

// JS에서 함수는 값이기 때문에 값에 할 수 있는 일을 함수에도 할 수 있음.

function sayHi() {
  // (1) 함수 생성
  alert("Hello");
}

let func = sayHi; // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행)
sayHi(); // Hello    //     본래 함수도 정상적으로 실행

// 콜백 함수
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel); // showOk, showCancel은 콜백함수 또는 콜백

// 위 콜백 함수를 함수 표현식을 사용해 표현
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  function () {
    // 익명 함수 - ask 밖에서는 접근 할 수 없음
    alert("동의하셨습니다.");
  },
  function () {
    // 익명 함수 - ask 밖에서는 접근 할 수 없음
    alert("취소버튼을 누르셨습니다.");
  }
);

// 함수 표현식 vs 함수 선언문

// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 함수 표현식
let sum = function (a, b) {
  return a + b;
};

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// ------------------------

sayHi("John"); // error!

let sayHi = function (name) {
  alert(`Hello, ${name}`);
};

let age = prompt("나이를 알려주세요.", 18);

// 조건에 따라 함수를 선언함
if (age < 18) {
  function welcome() {
    alert("안녕!");
  }
} else {
  function welcome() {
    alert("안녕하세요!");
  }
}

// 함수를 나중에 호출합니다.
welcome(); // Error: welcome is not defined

let age = 16; // 16을 저장했다 가정

if (age < 18) {
  welcome();               // \   (실행)
                           //  |
  function welcome() {     //  |
    alert("안녕!");        //  |  함수 선언문은 함수가 선언된 블록 내
  }                        //  |  어디에서든 유효합니다
                           //  |
  welcome();               // /   (실행)

} else {

  function welcome() {
    alert("안녕하세요!");
  }
}

// 여기는 중괄호 밖이기 때문에
// 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.

welcome(); // Error: welcome is not defined

let age = prompt("나이를 알려주세요.", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("안녕!");
  };

} else {

  welcome = function() {
    alert("안녕하세요!");
  };

}

welcome(); // 제대로 동작