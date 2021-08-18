function solution(numbers) {
    const nums = numbers.split(" ").map(item => Number(item));

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i+1]) {
            return false;
        }
    }

    return true;
}

exports.solution = solution;