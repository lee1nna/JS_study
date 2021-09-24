// 변수와 상수

let message; // 변수 선언
message = "Hello";
alert(message);

let m = "Hello~"; // 변수 정의와 동시에 값 할당
alert(m);

let user = "John",
  age = 25,
  message = "Hi"; // 한 줄에 여러 변수 선언

message = "World"; // 값 변경

let Hello = "Hello world!";

message = Hello; // Hello의 'Hello world' 값을 message에 복사

// 두 변수는 같은 값을 가짐.
alert(Hello);
alert(message);

const myBirthday = "09.02.1999"; // 상수 선언

myBirthday = "01.01.2000"; // error, can't reassign the constant!

const COLOR_RED = "#F00";
let color = COLOR_RED;
alert(color);
