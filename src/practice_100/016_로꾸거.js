var input = prompt("입력: ");
var reverse_input = "";
for (let i=input.length-1; i>=0; i--) {
    reverse_input += input[i];
}

/*
    // 다른 방법
    const reverse_input = input.split("").reverse().join("");

*/

console.log(reverse_input);