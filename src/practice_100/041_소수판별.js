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

var n = prompt("입력: ");
if (isPrime(n)) {
    console.log("YES");
} else {
    console.log("NO");
}