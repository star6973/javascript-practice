function solution(num) {
    num = num.split(" ");
    const div = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
    const rem = parseInt(num[0], 10) % parseInt(num[1], 10);

    return `${div} ${rem}`;
}

exports.solution = solution;