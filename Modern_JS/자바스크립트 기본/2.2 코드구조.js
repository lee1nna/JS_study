// 세미콜론의 중요성

alert("에러가 발생합니다.")[(1, 2)].forEach(alert);

alert("제대로 동작합니다.");
[(1, 2)].forEach(alert);

// 주석

// 이 주석은 한 줄을 다 차지합니다.
alert('Hello');

alert('World'); // 이 주석은 문 다음 이어집니다.

/* 두 줄짜리 주석 예제
이것은 여러 줄의 주석입니다.
*/
alert('Hello');
alert('World');

// 중첩 주석은 에러 발생

// /*
// /* 중첩 주석 에러 */
// */