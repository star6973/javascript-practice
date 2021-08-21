const {solution} = require("../070__행렬 곱하기");
const test1 = {
    input: {
        a: [[1, 2], [2, 4]],
        b: [[1, 0], [0, 3]]
    },
    answer: [[1, 6], [2, 12]],
};

describe('practice', () => {
    test('001', () => {
        expect(solution(test1.input.a, test1.input.b)).toEqual(test1.answer);
    });
});