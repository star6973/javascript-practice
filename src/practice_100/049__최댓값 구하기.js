/*
    let numbers = prompt("입력: ").split(" ").map((n) => {
        return parseInt(n, 10);
    });

    numbers.sort((a, b) => {
        return b - a;
    });

    console.log(numbers[0]);
*/

function solution(numbers) {
    numbers = numbers.split(" ");
    return Math.max(...numbers);
}

exports.solution = solution;