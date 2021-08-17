let alpha = prompt("입력: ");
let result = '';

for (let i=0; i<alpha.length; i++) {
    if (alpha[i] == alpha[i].toUpperCase()) {
        result += alpha[i].toLowerCase();
    } else {
        result += alpha[i].toUpperCase();
    }
}

console.log(result);