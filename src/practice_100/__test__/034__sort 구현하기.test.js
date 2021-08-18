const { solution } = require("../034__sort 구현하기");
const test1 = {
    input: "176 156 155 165 166 169",
    answer: false,
}
const test2 = {
    input: "155 156 165 166 169 176",
    answer: true,
}

describe('practice', () => {
    test('034', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});