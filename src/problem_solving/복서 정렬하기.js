function solution(weights, head2head) {
    //! 조건 1. 다른 복서랑 붙어본적 없으면, 승률은 0%
    //! 조건 2. 승률이 높으면 앞쪽 순서
    //! 조건 3. 승률이 동일하면, 자신보다 몸무게가 무거운 복서를 이긴 횟수가 많은 복서가 앞쪽 순서
    //! 조건 4. 조건 3까지 동일하면, 자기 몸무게가 무거운 복서가 앞쪽 순서
    //! 조건 5. 조건 4까지 동일하면, 복서의 번호 중에서 작은 번호가 앞쪽 순서

    //? 우선순위: 승률(rate) > 자신보다 무거운 몸무게 이긴 횟수(large weight win) > 몸무게(weight) > 번호(number)

    //* {
    //*     rate: {
    //*         win: 0,
    //*         lose: 0,
    //*         none: 0,
    //*     },
    //*     largeWeightWin: 0,
    //*     number: 0
    //* }

    let boxers = [];
    for (let i = 0; i < weights.length; i++) {
        // 현재 선수의 번호 = i+1
        // 현재 선수의 몸무게 = weights[i]
        // 현재 선수의 경기 = head2head[i]

        let temp = {
            rate: 0,
            largeWeightWin: 0,
            weight: 0,
            number: 0,
        };
        let winCount = 0;
        let loseCount = 0;

        for (let j = 0; j < head2head[i].length; j++) {
            // 자기 자신인 경우는 None
            if (i === j) continue;

            // 현재 상대 선수의 몸무게 = weights[j]
            // 현재 상대 선수와의 경기 = head2head[i][j]
            // 우선순위 1 - 승률
            if (head2head[i][j] === 'L') {
                loseCount += 1;
            } else if (head2head[i][j] === 'W') {
                winCount += 1;

                // 우선순위 2 - 몸무게
                if (weights[i] < weights[j]) {
                    temp['largeWeightWin'] += 1;
                }
            }
        }

        temp['rate'] =
            (winCount / (winCount + loseCount)) * 100 !== 'NaN'
                ? parseFloat((winCount / (winCount + loseCount)) * 100)
                : 0;
        temp['weight'] = weights[i];
        temp['number'] = i + 1;

        boxers.push(temp);
    }

    // 정렬 시작
    boxers = boxers.sort((a, b) => {
        return (
            b.rate - a.rate ||
            b.largeWeightWin - a.largeWeightWin ||
            b.weight - a.weight ||
            a.number - b.number
        );
    });

    const answer = boxers.map((item) => item.number);

    return answer;
}

exports.solution = solution;
