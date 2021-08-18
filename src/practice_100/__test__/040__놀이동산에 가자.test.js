const { solution } = require("../040__놀이동산에 가자");
const test1 = {
    input: {
        limit: 50,
        weights: [20, 20, 20, 20, 20]
    },
    answer: 2
};

describe('practice', () => {
    test('040', () => {
        expect(solution(test1.input.limit, test1.input.weights)).toEqual(test1.answer);
    });
});