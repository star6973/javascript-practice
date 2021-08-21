function solution(schedule, time) {
    let answer = [];
    let schFormat = schedule.map(item => `2021-08-21 ${item}:00`);
    let tmFormat = `2021-08-21 ${time}:00`;

    schFormat.forEach(item => {
        let sch = new Date(item);
        let now = new Date(tmFormat);

        let diff = sch - now;
        if (diff < 0) answer.push("지나갔습니다");
        else {
            let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
            let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");

            answer.push(`${hour}시간 ${min}분`);
        }
    })

    return answer;
}

exports.solution = solution;