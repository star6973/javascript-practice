const student_names = prompt("입력: ").split(" ");
const student_scores = prompt("입력: ").split(" ");

let obj = {};
for (let i=0; i<student_names.length; i++) {
    obj[student_names[i]] = parseInt(student_scores[i], 10);
}

console.log(obj);