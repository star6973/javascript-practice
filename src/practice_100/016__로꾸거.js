function solution(input) {
    let reverse_input = "";
    for (let i=input.length-1; i>=0; i--) {
        reverse_input += input[i];
    }
    // const reverse_input = input.split("").reverse().join("");
    return reverse_input;
}

exports.solution = solution;