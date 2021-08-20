function solution(list1, list2) {
    let result = [];
    Object.keys(list1).forEach((v, i) => {
        if (i % 2 === 0) result.push([list1[i], list2[i]]);
        else result.push([list2[i], list1[i]]);
    })
    return result;
}

exports.solution = solution;