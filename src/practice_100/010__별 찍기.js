function solution(num) {
    let tree = '';

    for (let i = 1; i <= num; i++) {
        let star = '';
        for (let j = 1; j <= num - i; j++){ // num-i만큼 해줘야지 공백의 수가 바뀐다.
            star += ' ';
        }
    
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += '*';
        }
    
        tree += star + '\n';
    }

    return tree;
}

exports.solution = solution;