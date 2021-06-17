const numbers = prompt("입력: ").split(" ");
let max_num = 0;
for (let i=0; i<numbers.length; i++) {
    if (max_num <= parseInt(numbers[i], 10)) {
        max_num = parseInt(numbers[i], 10)
    }
}

console.log(max_num);

/*
    let numbers = prompt("입력: ").split(" ").map((n) => {
        return parseInt(n, 10);
    });

    numbers.sort((a, b) => {
        return b - a;
    });

    console.log(numbers[0]);
*/