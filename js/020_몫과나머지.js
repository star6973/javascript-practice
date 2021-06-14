const num = prompt("입력: ").split(" ");
const div = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
const rem = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(div, rem);