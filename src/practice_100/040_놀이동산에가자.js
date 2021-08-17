const limit_weight = prompt("입력: ");
const n = prompt("입력: ");

let total = 0;
let result = 0;
for (let i=1; i<=n; i++) {
    total += parseInt(prompt("입력: "), 10);
    if (total <= limit_weight) {
        result = i;
    }
}

console.log(result);