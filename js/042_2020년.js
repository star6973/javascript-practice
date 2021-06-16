// 윤년: 2월이 29일까지
const year_month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};
const days = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];

const input = prompt("입력: ").split(" ");
var m = parseInt(input[0], 10);
var d = parseInt(input[1], 10);
let total_d = 0;

for (let item in year_month) {
    if (m > parseInt(item, 10)) {
        total_d += year_month[item];
    }
}

console.log(days[(total_d + d) % 7 - 1]);

/*
    const month = prompt('월을 입력하세요.');
    const date = prompt('일을 입력하세요.');

    function solution(a,b){
        const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

        const x = new Date('2020-'+a+'-'+b);
        return day[x.getDay()];
    }
    console.log(solution(month, date));
*/