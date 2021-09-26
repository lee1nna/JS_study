// 비교 연산자

// 불린형 반환
alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true

let result = 5 > 4; // 비교 결과를 변수에 할당
alert(result); // true

// 문자열 비교 ('사전'순으로 문자열 비교)
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

// 다른 형을 가진 값 간의 비교
alert("2" > 1); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됨.
alert("01" == 1); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됨.
alert(true == 1); // true
alert(flase == 0); // true

// 일치 연산자
alert(0 == false); // true, 동등 연산자 ==은 0과 false를 구별 못함.
alert("" == false); // true, 동등 연산자 ==은 0과 false를 구별 못함.

alert(0 === false); // false, 일치 연산자 ===는 피연산자의 자료형 동등 여부도 검사하여 반환

// null이나 undefined와 비교하기
alert(null === undefined); // false
alert(null == undefined); // true

// 산술 연산자나 기타 비교 연산자 <, >, <=, >=를 사용하여 null과 undefined를 비교
// null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.

// null vs 0
// 동등 연산자 ==는 피연산자가 undefined나 null 일 때 형변환을 하지 않음.
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

// 비교가 불가능한 undefined
alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false

