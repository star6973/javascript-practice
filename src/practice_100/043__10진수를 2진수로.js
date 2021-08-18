// let num = parseInt(prompt("입력: "), 10);
// console.log(num.toString(2));

/*
    10진수를 다른 진수로 변환할 때, toString()
    다른 진수를 10진수로 변환할 때, parseInt()
*/

let a = prompt("입력: ");
let b = [];
let result = '';

while (a) {
    b.push(a % 2);
    a = parseInt(a/2, 10);
}

b.reverse();
b.forEach((n) => {
    result += n;
})

console.log(result);