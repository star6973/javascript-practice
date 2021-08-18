const { solution } = require("../049__최댓값 구하기");
const test1 = {
    input: "10 9 8 7 6 5 4 3 2 1",
    answer: 10,
};

describe('practice', () => {
    test('049', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});