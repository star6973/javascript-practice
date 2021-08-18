function isPrime(num) {
    let count = 0;

    for (let i=1; i<=num; i++) {
        if (num % i == 0) {
            count += 1;
        }
    }

    if (count === 2) return true;
    else return false;
}

function solution(n) {
    if (isPrime(n)) {
        return true;
    } else {
        return false;
    }
}

exports.solution = solution;