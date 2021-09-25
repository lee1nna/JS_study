// alert
alert("hello");

// prompt, 두 번째 매개변수는 필수가 아닌 선택값
let age = prompt("나이를 입력해주세요.", 100);
alert(`당신의 나이는 ${age} 입니다.`); // 당신의 나이는 100살 입니다.

let test = prompt("Test", ""); // IE에서는 두 번째 매개변수에 항상 값을 넣어줄 것을 권장

// confirm
let isBoss = confirm("당신이 주인인가요?");
alert(isBoss); // 확인이면 true, 취소면 false 출력

