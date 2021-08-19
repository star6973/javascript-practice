const { solution } = require("../061__문자열 압축하기");
const test1 = {
    input: "aaabbbbcdddd",
    answer: "a3b4c1d4",
};

describe('practice', () => {
    test('061', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});