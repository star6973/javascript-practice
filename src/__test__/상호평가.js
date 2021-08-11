const solution = require("../상호평가");

test("학생의 학점은?", () => {
    const scores1 = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];
    const result1 = "FBABD";
    expect(solution(scores1) === result1);

    const scores2 = [[50,90],[50,87]];
    const result2 = "DA";
    expect(solution(scores2) === result2);

    const scores3 = [[70,49,90],[68,50,38],[73,31,100]];
    const result3 = "CFD";
    expect(solution(scores3) === result3);
})