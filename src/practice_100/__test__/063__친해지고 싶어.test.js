const { solution } = require("../063__친해지고 싶어");
const test1 = {
    input: "복잡한 세상 편하게 살자",
    answer: "복세편살",
};
const test2 = {
    input: "알아서 잘 딱 깔끔하고 센스있게",
    answer: "알잘딱깔센",
};

describe('practice', () => {
    test('063', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
        expect(solution(test2.input)).toEqual(test2.answer);
    });
});