function solution(names, scores) {
    names = names.split(" ");
    scores = scores.split(" ").map(item => Number(item));

    return Object.fromEntries(names.map((v, i) => [names[i], scores[i]]));
}

exports.solution = solution;