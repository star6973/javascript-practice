const { solution } = require("../053__괄호 문자열");
const test1 = {
    input: "(())",
    answer: true,
};
const test2 = {
    input: "(){})",
    answer: false,
};
const test3 = {
    input: "[[)]",
    answer: false,
};
const test4 = {
    input: "[{()}]{}(([]))",
    answer: true,
};

describe('practice', () => {
    test('053', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
        expect(solution(test3.input)).toEqual(test3.answer);
        expect(solution(test4.input)).toEqual(test4.answer);
    });
});