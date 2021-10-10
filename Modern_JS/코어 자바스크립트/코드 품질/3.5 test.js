describe("pow", function () {
  it("2를 세 번 곱하면 8입니다.", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3을 네 번 곱하면 81입니다.", function () {
    assert.equal(pow(3, 4), 81);
  });
});
