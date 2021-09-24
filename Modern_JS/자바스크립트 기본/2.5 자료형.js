// 자료형

// no error 동적 타입 언어
let message = "hello";
message = 12345;

// 1. 숫자형
let n = 123;
n = 12.345;

// 2. BigInt

// 끝에 'n'이 붙으면 BigInt형 자료
const bigInt = 1234546547457645342341342333333333332222222n;

// 3. 문자형
let str = "hello";
let str2 = "single quotes are ok too";
let phrase = `can embed another ${str}`;

// 변수를 문자열 중간에 삽입 (`` 백틱 사용)
let name = "John";
alert(`hello ${nmae}!`);

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1 + 2}`);

// 4. 불린형
let nameFieldChecked = true; // 네, name field가 확인되었습니다.(checked)
let ageFieldChecked = false; // 아니오, age field가 확인되지 않았습니다.(not checked)

let isGreater = 4 > 1;
alert(isGreater); // true (비교결과:"yes")

// 5. 'null' 값
let age = null; // 존재하지 않는, 비어있는 값

// 6. 'undefined' 값
let a;
alert(a); // 'undefined' 출력, 값이 할당되지 않은 상태

// typeof 연산자 : 인수의 자료형 반환

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"

typeof null; // "object"

typeof alert; // "function" 함수는 객체형에 속함.
