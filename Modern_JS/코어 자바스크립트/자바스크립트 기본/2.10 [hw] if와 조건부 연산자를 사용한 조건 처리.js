// if와 문자열 0

// "0" 은 비어있지 않은 문자열이라 true 이므로 실행된다.
if ("0") {
  alert("Hello");
}

// 자바스크립트의 공식 이름
let jsOfficialName = prompt("자바스크립트의 공식이름은 무엇일까요?", "");

if (jsOfiicialName == "ECMAScript") {
  alert("정답입니다!");
} else {
  alert("모르셨나요? 정답은 ECMAScript 입니다.");
}

// 입력받은 숫자의 부호 표시하기
let num = prompt("숫자 하나를 입력해주세요", "");

if (num > 0) {
  alert("1");
} else if (num < 0) {
  alert("-1");
} else if (num == 0) {
  alert("0");
}

// 'if'를 '?'로 교체하기
let result;

if (a + b < 4) {
  result = "미만";
} else {
  result = "이상";
}

result = a + b < 4 ? "미만" : "이상";

// 'if-else'를 '?'로 교체하기
let message;

if (login == "직원") {
  message = "안녕하세요.";
} else if (login == "임원") {
  message = "환영합니다.";
} else if (login == "") {
  message = "로그인이 필요합니다.";
} else {
  message = "";
}

message =
  login == "직원"
    ? "안녕하세요."
    : login == "임원"
    ? "환영합니다"
    : login == ""
    ? "로그인이 필요합니다."
    : "";
