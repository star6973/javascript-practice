function solution(kor_name, eng_name) {
    return Object.fromEntries(kor_name.map((v, i) => [kor_name[i], eng_name[i]]))
}

exports.solution = solution;