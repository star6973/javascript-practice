const numbers = prompt("입력: ").split(" ").reverse();
let reverse_numbers = '';
for (let i=0; i<numbers.length; i++) {
    reverse_numbers += numbers[i]
}

console.log(reverse_numbers);