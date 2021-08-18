function solution(limit_weight, weights) {
    let result = [];
    let tot = 0;
    for (let i = 1; i < weights.length; i++) {
        tot += weights[i];
        if (tot < limit_weight) {
            result.push(weights[i]);
        } else {
            return result.length;
        }
    }
}

exports.solution = solution;