// "else"는 정말 필요한가요?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("보호자의 동의를 받으셨나요?");
  }
} // else문을 삭제해도 기존 코드와 동일하게 작동

// '?'나 '||'를 사용하여 함수 다시 작성하기
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

// min(a,b) 함수 만들기
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// pow(x,n) 함수 만들기
let x = prompt("x 입력", "");
let n = prompt("n 입력", "");

function pow(x, n) {
  for (let i = 1; i < n; i++) {
    let result = x * x;
  }
  return result;
}

if (n < 1) {
  n = prompt("자연수를 입력해주세요");
} else {
  alert(pow(x, n));
}
