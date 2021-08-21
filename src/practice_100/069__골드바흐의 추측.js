function solution(n) {
    // 에라토스테네스의 체
    let sieve = [];
    sieve[0] = false;
    sieve[1] = false;
    for (let i = 2; i < n+2; i++) sieve.push(true);

    let m = parseInt(n**0.5, 10);
    for (let i = 2; i < m + 1; i++) {
        if (sieve[i] === true) {
            for (let j = i+i; j < n; j+=i) { // i 이후의 i의 배수들은 false로 판정
                sieve[j] = false;
            }
        }
    }

    let prime = [];
    for (let i = 2; i < n; i++) {
        if (sieve[i]) {
            prime.push(i);
        }
    }

    let primeSet = prime.map(item => {
        if (prime.includes(n - item) && item <= (n - item)) {
            return [item, n-item];
        }
    }).filter(item => item !== undefined);

    let diffSet = primeSet.map(item => item[1] - item[0]);
    let minSet = primeSet[diffSet.indexOf(Math.min.apply(null, diffSet))]
    let maxSet = primeSet[diffSet.indexOf(Math.max.apply(null, diffSet))]

    return minSet.join(" ");
}

exports.solution = solution;