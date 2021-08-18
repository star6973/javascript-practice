const names = prompt("입력: ").split(" ");
let result = {};
let winner = "";

for (let idx in names) {
    let val = names[idx];
    result[val] = (result[val] === undefined ? 1 : result[val] += 1)
}

/*
    reduce(accumulator, currentValue, currentIndex, array)
    accumulator: 콜백의 반환값 누적
    currentValue: 처리할 현재 요소
    currentIndex: 처리할 현재 요소의 인덱스
    array: reduce()를 호출한 배열
*/
winner = Object.keys(result).reduce(function(a, b) {
    return result[a] > result[b] ? a : b;
})

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`)