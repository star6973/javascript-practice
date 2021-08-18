function solution(input) {
    const solar = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
    return solar[input - 1];
}

exports.solution = solution;