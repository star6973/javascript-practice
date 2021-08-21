function solution(n) {
    let i = 2;
    while (true) {
        let p = (i-1)*(i-2)/2;

        if (n - p >= 0 && n - p < i) {
            return [n - p, i];
        } else {
            i += 1;
        }
    }
}

exports.solution = solution;