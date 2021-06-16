function one(n) {
    console.log("n = ", n);
    function two(value) {
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
}
  
const a = one(2); // 함수 one이 실행되면, 함수 two를 반환(즉, 함수 two를 가리킴)
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));