function solution(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot >= arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return solution(left).concat(pivot, solution(right));
}

exports.solution = solution;