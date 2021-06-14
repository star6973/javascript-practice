const scores = prompt("입력: ").split(" "); // Array 문자열
var total = 0;

for (let i=0; i<scores.length; i++) {
    total += parseInt(scores[i], 10); // parseInt는 특정 진수의 정수로 반환한다.
}

console.log(Math.floor(total / scores.length)); // Math.floor 메소드는 소수점 자리를 모두 버림한다.