// 형변환

// 문자형으로 변환
let value = true;
alert(typeof value); // boolean

value = String(value); // 명시적 형변환, 변수 value엔 문자열 "true" 저장
alert(typeof value);

// 숫자형으로 변환
alert("6" / "2"); // 3, 문자열이 숫자형으로 자동 변환된 후 연산 실행

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환
alert(typeof num); // number

let age = Number("임의의 문자열 123");
alert(age); // NaN, 형변환 실패

alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN ("z"를 숫자로 변환하는 데 실패함)
alert(Number(true)); // 1
alert(Number(false)); // 0

// 불린형으로 변환
alert(Boolean(1)); // 숫자 1(true)
alert(Boolean(0)); // 숫자 0(false)

alert(Boolean("hello")); // 문자열(true)
alert(Boolean("")); // 빈 문자열(false)

alert(Boolean("0")); // true
alert(Boolean(" ")); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환


