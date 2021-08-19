const { solution } = require("../059__빈칸 채우기");
const test1 = {
    input: "hi",
    answer: "========================hi========================",
};
const test2 = {
    input: "hello",
    answer: "======================hello=======================",
};

describe('practice', () => {
    test('059', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});