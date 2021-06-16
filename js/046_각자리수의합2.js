let result = '';
for (let i=10; i<=15; i++) {
    result += i; // 자바스크립트는 문자열 기반이라 굳이 toString()을 사용할 필요 x
}
result = result.split("");

let tot = 0;
result.forEach(element => {
    tot += parseInt(element, 10);
});

console.log(tot);