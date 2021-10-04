// 좋지 않은 코드 스타일

// 문에 따른 구분이 없음, 들여쓰기, 띄어쓰기가 없음.
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// 들여쓰기가 없음.
let x = prompt("x?", ""),
  n = prompt("n?", "");

// 문장이 가로로 너무 길음.
if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}

// -------------------------

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", ""),
  n = prompt("n?", "");

if (n <= 0) {
  alert(
    `Power ${n} is not supported, 
    please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}
