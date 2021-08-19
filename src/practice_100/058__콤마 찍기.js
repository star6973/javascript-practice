function solution(num) {
    let splitNum = num.split("");
    return splitNum.map((val, idx) => {
        if (idx !== 0 && idx % 3 === 0) {
            splitNum[idx] = `,${val}`;
        }
        return splitNum[idx];
    }).join("");

    // 다른 방식 1: 내장 함수 사용
    // return num.toLocaleString();
}

// 다른 방식 2: 재귀 함수 사용
/*
    function solution(s) {
        if (s.length <= 3) return s;
        else return `${solution(s.slice(0, s.length - 3))},${solution(s.slice(s.length - 3))}`;
    }
*/

exports.solution = solution;