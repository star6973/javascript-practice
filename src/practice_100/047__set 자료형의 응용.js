function solution(people) {
    let result = new Set();
    for (let key in people) {
        result.add(people[key]);
    }

    return result.size;
}

exports.solution = solution;