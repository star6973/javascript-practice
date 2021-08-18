// Javascript에서는 null, undefined, 0, 빈 문자열, NaN, false를 제외하고는 모두 true로 취급한다.
function solution(input) {
    if ([null, undefined, 0, "", NaN].includes(input)) {
        return false;
    } else {
        return true;
    }
}

exports.solution = solution;