const { solution } = require("../055__하노이의 탑");
const test1 = {
    input: {
        num: 3,
        start: "A",
        end: "B",
        temp: "C",
    },
    answer: 7,
};

describe('practice', () => {
    test('055', () => {
        expect(solution(test1.input.num, test1.input.start, test1.input.end, test1.input.temp)).toEqual(test1.answer);
    });
});