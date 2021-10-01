// 화살표 함수 기본
let sum = (a, b) => {
  return a + b;
};

/* 위 화살표 함수는 아래 함수의 축약 버전이다.
let sum = function(a,b){
    return a+b;
};
*/

alert(sum(1, 2)); // 3

// 인수가 하나일 때는 괄호 생략 가능
let double = (n) => n * 2;
// let double = function(n) { return n*2}와 거의 동일

alert(double(3)); // 6

// 인수가 없을때는 괄호를 비워놓으면 됨
let sayHi = () => alert("안녕하세요!");
sayHi();

let age = prompt("나이를 알려주세요", 18);
let welcome = age < 18 ? () => alert("안녕") : () => alert("안녕하세요!");

welcome();

// 본문이 여러 줄인 화살표 함수
let sum = (a, b) => {
  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줌.
  let result = a + b;
  return result; // 중괄호를 사용했다면, return 지시자로 결과값을 반환해주어야 함.
};

alert(sum(1, 2)); // 3
