// while과 for 반복문

// while 반복문
let i = 0;
while (i < 3) {
  alert(i); // 0, 1, 2가 출력
  i++;
}

i = 3;
while (i) {
  // i가 0이 되면 조건이 falsy가 되어 반복문이 멈춤.
  alert(i);
  i--;
}

// do..while 반복문
i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// for 반복문
for (i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2가 출력
}

// 반복문 빠져나오기
let sum = 0;

while (true) {
  let value = +prompt("숫자를 입력하세요.", "");

  if (!value) break; // 반복문을 빠져나오는 지시자

  sum += value;
}
alert("합계: " + sum);

// 다음 반복으로 넘어가기
for (let i = 0; i < 10; i++) {
  // 조건이 참이라면 남아있는 본문은 실행되지 않음.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력
}

// break/continue와 레이블
for(i=0;i<3;i++){
    for(let j=0;j<3;j++){
        let input = prompt(`(${i},${j}의 값)`,'');
        // 여기서 멈춰서 아래의 '완료!'가 출력되게 하려면 break <labelName> 레이블(label)문 사용
        if(!input) break outer;
    }
}
alert('완료!');