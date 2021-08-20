const { solution } = require("../066__블럭탑 쌓기");
const test1 = {
    input: {
        block: ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"],
        rule: "ABCD",
    },
    answer: ["가능", "불가능", "가능", "가능", "가능"],
}

describe('practice', () => {
    test('065', () => {
      expect(solution(test1.input.block, test1.input.rule)).toEqual(test1.answer);
    });
});