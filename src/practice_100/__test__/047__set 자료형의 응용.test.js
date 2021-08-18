const { solution } = require("../047__set 자료형의 응용");
const test1 = {
    input: {
        이호준: "01050442903",
        이호상: "01051442904",
        이준호: "01050342904",
        이호준: "01050442903",
        이준: "01050412904",
        이호: "01050443904",
        이호준: "01050442903"
    },
    answer: 5
};

describe('practice', () => {
    test('047', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});