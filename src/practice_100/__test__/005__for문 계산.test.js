const { solution } = require("../005__for문 계산");
const test1 = {
  a: 10,
  b: 2,
  answer: 16,
};

describe('practice', () => {
  test('004', () => {
    expect(solution(test1.a, test1.b)).toEqual(test1.answer);
  });
});