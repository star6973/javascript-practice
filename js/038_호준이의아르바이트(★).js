const scores = prompt("입력: ").split(" ");
let candy = {};

for (let item of scores) {
    candy[item] = (candy[item] === undefined ? 1 : candy[item] += 1)
}

var sorted_candy = Object.keys(candy).map(function(x) {
    return [x, candy[x]];
})

sorted_candy.sort(function(a, b) {
    return b[1] - a[1];
})

let result = 0;
sorted_candy.slice(0, 3).forEach(x => {
    result += x[1];
})

console.log(result);

/*
    const scores = prompt('점수입력').split(' ').map(function(n){
        return parseInt(n, 10);
    });

    scores.sort((a, b) => {
        return a-b;
    });

    let count = 0;
    let arr = [];

    while (arr.length < 3) {
        let n = scores.pop();
        if (!arr.includes(n)){
            arr.push(n);
        }
        count += 1;
    }

    console.log(count);
*/