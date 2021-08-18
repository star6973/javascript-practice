const { solution } = require("../054__연속되는 수");
const test1 = {
    input: "1 2 3 4 5",
    answer: true,
};
const test2 = {
    input: "1 4 2 6 3",
    answer: false,
};

describe('practice', () => {
    test('054', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});