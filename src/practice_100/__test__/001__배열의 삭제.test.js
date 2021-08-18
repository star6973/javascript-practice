const { solution } = require("../001__배열의 삭제");
const test1 = {
  input: [100, 200, 300, 400, 500],
  answer: [100, 200, 300],
};

describe('practice', () => {
  test('001', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});