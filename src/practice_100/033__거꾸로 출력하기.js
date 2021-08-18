function solution(numbers) {
    let reverse_numbers = '';
    numbers = numbers.split(" ").reverse();

    for (let i = 0; i < numbers.length; i++) {
        reverse_numbers += numbers[i]
    }
    
    return reverse_numbers;
}

exports.solution = solution;