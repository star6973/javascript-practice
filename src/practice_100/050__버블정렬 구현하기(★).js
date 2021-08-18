function solution(arr) {
    let result = arr.slice();

    for (let i=0; i<result.length-1; i++) {
        for (let j=0; j<result.length-1; j++) {
            if (result[j] > result[j+1]) {
                var temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }

    return result;
}

exports.solution = solution;