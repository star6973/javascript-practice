const { solution } = require("../020__몫과 나머지");
const test1 = {
    input: "10 2",
    answer: "5 0",
}

describe('practice', () => {
    test('020', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});