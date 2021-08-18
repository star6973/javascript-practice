const { solution } = require("../051__병합정렬 구현하기(★)");
const test1 = {
  input: [38, 27, 43, 3, 9, 82, 10],
  answer: [3, 9, 10, 27, 38, 43, 82],
};

describe('practice', () => {
  test('051', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});