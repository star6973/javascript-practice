const { solution } = require("../056__객체의 함수 응용");
const test1 = {
    input: {
        'korea': 220877,
        'Rusia': 17098242,
        'China': 9596961,
        'France': 543965,
        'Japan': 377915,
        'England' : 242900,
    },
    answer: "England 22023",
};

describe('practice', () => {
    test('056', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});