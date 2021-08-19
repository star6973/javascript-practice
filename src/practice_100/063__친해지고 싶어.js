function solution(input) {
    return input.split(" ").map((val, i) => {return [...val[0]]}).join("");
}

exports.solution = solution;