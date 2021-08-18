const { solution } = require("../027__객체 만들기");
const test1 = {
    input: {
        names: "Yujin Hyewon",
        scores: "70 100",
    },
    answer: {
        "Yujin": 70, 
        "Hyewon": 100
    }
}

describe('practice', () => {
    test('027', () => {
        expect(solution(test1.input.names, test1.input.scores)).toEqual(test1.answer);
    });
});