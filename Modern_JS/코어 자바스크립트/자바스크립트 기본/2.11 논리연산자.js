// 논리 연산자

// || (OR)
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) {
  // if( true || false ) 와 동일하게 동작합니다.
  alert("truthy!");
}

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("영업시간이 아닙니다.");
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("영업시간이 아닙니다."); // 주말이기 때문
}

// 첫 번째 truthy를 찾는 OR 연산자 ‘||’
alert(1 || 0); // 1 (1은 truthy임)

alert(null || 1); // 1 (1은 truthy임)
alert(null || 0 || 1); // 1 (1은 truthy임)

alert(undefined || null || 0); // 0 (모두 falsy이므로, 마지막 값을 반환함)

// 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert(firstName || lastName || nickName || "익명"); // 바이올렛

// 단락 평가
true || alert("not printed"); // true를 만나고 평가를 멈춰서 alert 출력 안 됨.
false || alert("printed"); // printed 출력

// && (AND)
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("현재 시각은 12시 30분입니다.");
}

if (1 && 0) {
  // 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 됨.
  alert("if 문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다.");
}

// 첫 번째 falsy를 찾는 AND 연산자 ‘&&’

// 첫 번째 피연산자가 truthy이면, AND는 두 번째 피연산자를 반환
alert(1 && 0); // 0
alert(1 && 5); // 5

// 첫 번째 피연산자가 falsy이면, AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시
alert(null && 5); // null
alert(0 && "아무거나 와도 상관없습니다."); // 0

alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 마지막 값, 3

// ! (NOT)
alert(!true); // false
alert(!0); // true

// !!, 두개 연달아 사용시 값을 불린형을 변환 Boolean()랑 같은 역할
alert(!!"non-empty string"); // true
alert(!!null); // false


