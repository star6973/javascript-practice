const { solution } = require("../017__놀이기구 키 제한");
const test1 = {
    input: 180,
    answer: true,
};
const test2 = {
    input: 80,
    answer: false,
}

describe('practice', () => {
    test('017', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});