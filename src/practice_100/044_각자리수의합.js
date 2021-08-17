let number = prompt("입력: ");
let result = 0;
var div = -1;

while (div !== 0) {
    div = parseInt(number/10, 10);
    res = parseInt(number%10, 10);
    number = div;
    result += res;
}

console.log(result);