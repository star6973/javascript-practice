const { solution } = require("../057__1의 개수");
const test1 = {
    input: {},
    answer: 301,
};

describe('practice', () => {
    test('057', () => {
        expect(solution()).toEqual(test1.answer);
    });
});