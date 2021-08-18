// ES6부터 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있다.
function solution(name) {
    return `안녕하세요. 저는 ${name} 입니다.`
}

exports.solution = solution;