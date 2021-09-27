// null 병합 연산자 '??' - 정의된 값을 반환
// ??는 안전성 관련 이슈로 인해 &&와 ||와 함께 사용하지 못함.

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛 출력

// '??'와 '||'의 차이
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
