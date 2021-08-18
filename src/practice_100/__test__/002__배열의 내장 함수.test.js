const { solution } = require("../002__배열의 내장 함수");
const test1 = {
  input: [200, 100, 300],
  answer: [200, 100, 10000, 300],
};

describe('practice', () => {
  test('002', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});