// 함수 선언
const add = (a, b) => a + b;

function caculator(func, a, b) {
    return func(a, b);
}

// 함수 호출
add(3,5); // 8
caculator(add, 3, 5); // 8

//함수의 호출을 보면 리턴값으로 대체 해보기
document.querySelector('#header').addEventListener('click', add(3, 5))
document.querySelector('#header').addEventListener('click', (3 + 5))
