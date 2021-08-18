const { solution } = require("../016__로꾸거");
const test1 = {
    input: "Hello World",
    answer: "dlroW olleH",
}
const test2 = {
    input: "Ji Myung Hwa",
    answer: "awH gnuyM iJ",
}

describe('practice', () => {
    test('016', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});