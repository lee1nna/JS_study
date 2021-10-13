// 객체

let user = new Object(); // '객체 생성자' 문법
let user = {}; // '객체 리터럴' 문법

// 리터럴과 프로퍼티
let user = {
  // 객체
  name: "John", // 키: "name", 값: "John"
  age: 30, // 키: "age", 값: 30
};

alert(user.name); //Jhon
alert(user.age); // 30

user.isAdmin = true; // 불린형 프로퍼티 추가

delete user.age; // 프로퍼티 삭제

let user = {
  "likes birds": true, // 복수의 단어는 따옴표로 묶어야 함.
};

const user = {
  name: "John",
};

user.name = "Pete";

alert(user.name); // Pete, const는 user의 값은 고정이지만 안의 내용은 고정되어 있지 않음.
