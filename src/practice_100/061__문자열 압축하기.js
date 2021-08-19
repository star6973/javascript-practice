function solution(input) {
    let count = {};

    input = input.split("");
    input.forEach((val, idx) => {
        if (Object.keys(count).includes(val)) {
            count[val] += 1;
        } else {
            count[val] = 1;
        }
    });

    return Object.entries(count).map(([k, v]) => { return k + v }).join("");
}

exports.solution = solution;