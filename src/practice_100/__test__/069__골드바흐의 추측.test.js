const {solution} = require("../069__골드바흐의 추측");
const test1 = {
    input: 8,
    answer: "3 5",
};
const test2 = {
    input: 10,
    answer: "5 5",
};
const test3 = {
    input: 16,
    answer: "5 11",
};

describe('practice', () => {
    test('001', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
        expect(solution(test3.input)).toEqual(test3.answer);
    });
});