const { solution } = require("../058__콤마 찍기");
const test1 = {
    input: "123456789",
    answer: "123,456,789",
};
const test2 = {
    input: "234392375732953",
    answer: "234,392,375,732,953",
};
const test3 = {
    input: "777777777",
    answer: "777,777,777",
};

describe('practice', () => {
    test('058', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
        expect(solution(test3.input)).toEqual(test3.answer);
    });
});