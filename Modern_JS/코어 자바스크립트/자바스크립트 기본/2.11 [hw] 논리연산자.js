// 다음 OR 연산의 결과는 무엇일까요?
alert(null || 2 || undefined); // 2

// OR 연산자의 피연산자가 alert라면?
alert(alert(1) || 2 || alert(3)); // alert 메서드는 undefined를 반환하므로 1, 2가 차례로 출력

// 다음 AND 연산의 결과는 무엇일까요?
alert(1 && null && 2); // null

// AND 연산자의 피연산자가 alert라면?
alert(alert(1) && alert(2)); // 1, undefined 차례로 실행

// OR AND OR 연산자로 구성된 표현식
alert(null || (2 && 3) || 4); // 3

// 사이 범위 확인하기
if (age >= 14 && age <= 90) {
}

// 바깥 범위 확인하기
if (age < 14 || age > 90) {
}

if (!(age >= 14 && age <= 90)) {
}

// "if"에 관한 고찰
if (-1 || 0) alert( 'first' ); // 실행됨
if (-1 && 0) alert( 'second' ); // 실행안됨
if (null || -1 && 1) alert( 'third' ); // 실행됨
