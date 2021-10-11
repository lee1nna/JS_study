// 잘못된 점 찾기
// 참고: 문법 오류는 없고, 모든 테스트가 문제없이 통과합니다.

it("주어진 숫자의 n 제곱", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/*
첫번째 assert 코드에서 만약 failure 가 반환된다면
이후 aseert 들이 실행되지 않게 된다.
그러므로 따로 쪼개서 실행시켜주어야 한다.
*/

describe("주어진 숫자의 n 제곱", function () {
  it("5를 1 제곱하면 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5를 2 제곱하면 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5를 3 제곱하면 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});
