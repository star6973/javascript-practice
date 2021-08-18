function solution(a, b) {
    for (var i = 1; i < 5; i+=2) { // i = 1, 3(2씩 증가했기 때문에)
        a += i;
    }
    return a + b;
}

exports.solution = solution;