const { solution } = require("../006__False");
const test1 = {
    input: NaN,
    answer: false,
};
const test2 = {
    input: 1,
    answer: true,
};
const test3 = {
    input: "",
    answer: false,
};
const test4 = {
    input: 0,
    answer: false,
};
const test5 = {
    input: undefined,
    answer: false,
};
  
describe('practice', () => {
    test('006', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
        expect(solution(test3.input)).toEqual(test3.answer);
        expect(solution(test4.input)).toEqual(test4.answer);
        expect(solution(test5.input)).toEqual(test5.answer);
    });
});