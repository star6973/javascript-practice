const num = prompt("입력: ");
let result = "";

for (let i=1; i<=9; i++) {
    result += num*i + ' '
}

console.log(result);