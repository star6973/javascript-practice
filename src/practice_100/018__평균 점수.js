function solution(scores) {
    let total = 0;
    scores = scores.split(" ");
    
    for (let i = 0; i < scores.length; i++) {
        total += Number(scores[i]);
    }
    
    return Math.floor(total / scores.length);
}

exports.solution = solution;