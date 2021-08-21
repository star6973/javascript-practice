function checkMatrix(a, b) {
    return a[0].length === b.length ? true : false;    
}

function solution(a, b) {
    if (checkMatrix(a, b)) {
        let answer = [];
        let len = a[0].length;
        for (let i = 0; i < len; i++) {
            let tempList = [];
            for (let j = 0; j < len; j++) {
                let temp = 0;
                for (let k = 0; k < len; k++) {
                    temp += (a[i][k] * b[k][j]);
                }
                tempList.push(temp);
            }
            answer.push(tempList);
        }
        return answer;
    } else {
        return -1;
    }
}

exports.solution = solution;