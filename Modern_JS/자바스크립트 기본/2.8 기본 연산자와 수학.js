// 단항 연산자 (피연산자가 1개)
let x = 1;
x = -x;
alert(x); // -1, 단항 마이너스 연산자는 부호를 뒤집음.

// 이항 연산자 (피연산자가 2개)
let x = 1,
  y = 3;
alert(y - x); // 2, 이항 마이너스 연산자는 뺄셈을 해줌.

// 나머지 연산자 %
alert(5 % 2); // 5를 2로 나눈 후의 나머지인 1 출력
alert(8 % 3); // 8을 3으로 나눈 후의 나머지인 2 출력

// 거듭제곱 연산자 **
alert(2 ** 2); // 4  (2 * 2)
alert(2 ** 3); // 8  (2 * 2 * 2)
alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

alert(4 ** (1 / 2)); // 2 (1/2 거듭제곱은 제곱근)
alert(8 ** (1 / 3)); // 2 (1/3 거듭제곱은 세제곱근)

// 이항 연산자 '+'와 문자열 연결
let s = "my" + "string";
alert(s); // mystring

alert("1" + 2); // "12" 문자열로 반환
alert(2 + "1"); // "21" 문자열로 반환

alert(2 + 2 + "1"); // '221'이 아니라 '41'이 출력

alert(6 - "2"); //4, '2'를 숫자로 바꾼 후 연산 진행
alert("6" / "2"); //3, 두 피연산자가 숫자로 바뀐 후 연산 진행

// 단항 연산자 +와 숫자형으로의 변환

// 숫자에는 아무런 영향이 없음.
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화
alert(+ture); // 1
alert(+""); // 0

// 숫자형의 덧셈을 원할 경우 단항 덧셈 연산자 사용
let apples = "2";
let oranges = "3";

alert(apples + oranges); // 23, 문자열 연결
alert(+apples + +oranges); // 5, 숫자형으로 변화 후 연산 Number()와 같음.

// 할당 연산자
x = 2 * 2 * 1;
alert(x); // 5

// 값을 반환하는 할당 연산자
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// 할당 연산자 체이닝
a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4

// 복합 할당 연산자
let n = 2;

n = n + 5;
n = n * 2;

// 77, 78줄과 동일한 연산
n += 5;
n *= 2;

// 증가 감소 연산자, 변수에만 사용 가능
let counter = 2;
counter++; // counter = counter + 1과 동일하게 동작
alert(counter); // 3

counter--; // counter = counter - 1과 동일하게 동작
alert(counter); // 2

// 증가 감소 연산자의 전위형과 후위형
counter = 1;
a = 1;
a = ++counter;
alert(a); // 2

counter = 1;
a = 1;
a = counter++; // 1
alert(a);

// 쉼표 연산자
a = (1+2, 3+4);
alert(a); // 7 (3 + 4의 결과)