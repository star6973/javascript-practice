function solution(input) {
    return input.year.concat('/', input.month, '/', input.day, ' ', input.hour, ':', input.minute, ':', input.second);
}

exports.solution = solution;