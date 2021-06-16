const numbers = prompt("입력: ").split(" ");
let max_num = 0;

for (let n of numbers) {
    console.log("n = ", n);
    if (max_num <= n) {
        max_num = n;
    }
    console.log("max_num = ", max_num);
}

console.log(max_num);