function solution(input) {
    const totLength = 50;
    const leftPad = Math.floor((totLength - input.length) / 2);
    const rightPad = Math.round((totLength - input.length) / 2);

    return "=".repeat(leftPad) + input + "=".repeat(rightPad);

    // padStart, padEnd
    return input.padStart(leftPad + input.length, "=").padEnd(50, "=");
}

exports.solution = solution;