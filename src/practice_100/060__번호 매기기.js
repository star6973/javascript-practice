function solution(students) {
    students.sort();
    students.forEach((val, idx) => {
        console.log(`번호: ${idx+1}, 이름: ${val}`);
    })

    return
}

exports.solution = solution;