const { solution } = require("../026__행성 문제2(★)");
const test1 = {
    input: {
        kor_name: ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"],
        eng_name: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    },
    answer: {
        "수성": "Mercury",
        "금성": "Venus",
        "지구": "Earth",
        "화성": "Mars",
        "목성": "Jupiter",
        "토성": "Saturn",
        "천왕성": "Uranus",
        "해왕성": "Neptune"
    }
}

describe('practice', () => {
    test('026', () => {
        expect(solution(test1.input.kor_name, test1.input.eng_name)).toEqual(test1.answer);
    });
});