const heights = prompt("입력: ").split(" ");
let answer = "YES";
for (let i=0; i<heights.length-1; i++) {
    if (heights[i] > heights[i+1]) {
        answer = "NO"
        break
    }
}

console.log(answer);

/*
    sorted_heights = heights.sort(function(a, b) {
        return a - b;
    }).join(" ");

    if (heights === sorted_heights) {
        console.log("YES");
    } else {
        console.log("NO");
    }
*/