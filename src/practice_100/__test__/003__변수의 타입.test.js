const { solution } = require("../003__변수의 타입");
const test1 = {
  input: [100, 200, 300],
  answer: "object",
};

describe('practice', () => {
  test('003', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});