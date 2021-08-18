function solution(number) {
    let result = 0;
    var div = -1;
    
    while (div !== 0) {
        div = parseInt(number/10, 10);
        res = parseInt(number%10, 10);
        number = div;
        result += res;
    }

    return result;
}

exports.solution = solution;