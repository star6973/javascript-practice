const { solution } = require("../부족한 금액 계산하기");

test("부족한 금액은?", () => {
    expect(solution(3, 20, 4)).toBe(10);
})