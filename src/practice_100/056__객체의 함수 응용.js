function solution(nation) {
    // 1. 차이의 절댓값 object 구하기
    let diffNation = {};
    Object.entries(nation).forEach(([k, v]) => {
        if (k !== "korea") {
            diffNation[k] = Math.abs(v - nation["korea"]);
        }
    })

    // 2. 절댓값 작은 순서로 정렬하기
    diffNation = Object.entries(diffNation).sort(([, a], [, b]) => a - b).reduce((r, [k, v]) => ({ ...r, [k]:v }), {});

    // 3. 결과 출력
    return Object.entries(diffNation)[0].join(" ");
}

exports.solution = solution;