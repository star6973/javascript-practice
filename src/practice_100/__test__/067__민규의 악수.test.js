const { solution } = require("../067__민규의 악수");
const test1 = {
    input: 59,
    answer: [4, 12],
};

describe('practice', () => {
    test('067', () => {
      expect(solution(test1.input, test1.input)).toEqual(test1.answer);
    });
});