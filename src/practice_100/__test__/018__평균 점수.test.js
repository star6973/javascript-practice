const { solution } = require("../018__평균 점수");
const test1 = {
    input: "20 30 40",
    answer: 30,
}

describe('practice', () => {
    test('018', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});