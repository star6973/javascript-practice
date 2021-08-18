const { solution } = require("../004__변수의 타입2");
const test1 = {
  input: 1,
  answer: "number",
};
const test2 = {
    input: 2.22,
    answer: "number",
};
const test3 = {
    input: 'p',
    answer: "string"
};
const test4 = {
    input: [1, 2, 3],
    answer: "object"
};

describe('practice', () => {
  test('004', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
    expect(solution(test2.input)).toEqual(test2.answer);
    expect(solution(test3.input)).toEqual(test3.answer);
    expect(solution(test4.input)).toEqual(test4.answer);
  });
});