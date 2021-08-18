function solution(heights) {
    heights = heights.split(" ");

    let sorted_heights = heights.sort(function(a, b) {
        return a - b;
    }).join(" ");

    if (heights === sorted_heights) {
       return true;
    } else {
        return false;
    }
}

exports.solution = solution;