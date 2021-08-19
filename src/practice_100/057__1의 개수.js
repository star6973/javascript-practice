function solution() {
    let result = [];

    for (let i = 0; i <= 1000; i++) {
        result.push(...i.toString().split(""));
    }
    return result.filter(v => v === "1").length;
}

exports.solution = solution;