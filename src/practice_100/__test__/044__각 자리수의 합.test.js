const { solution } = require("../044__각 자리수의 합");
const test1 = {
    input: 18234,
    answer: 18,
};
const test2 = {
    input: 3849,
    answer: 24,
}

describe('practice', () => {
    test('044', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});