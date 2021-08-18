const route = [];

function solution(num, start, end, temp) {
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    solution(num-1, start, temp, end);
    route.push([start, end]);
    solution(num-1, temp, end, start);

    return route.length;
}

exports.solution = solution;