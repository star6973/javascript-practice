const gradeMap = score => {
    if (score >= 90) return "A";
    else if (score >= 80 && score < 90) return "B";
    else if (score >= 70 && score < 80) return "C";
    else if (score >= 50 && score < 70) return "D";
    else return "F";
}

function solution(scores) {
    let scoreDict = {};
    for (let i=0; i<scores.length; i++) {
        scoreDict[i] = [];
    }

    scores.forEach((stdScores, stdID) => {
        stdScores.forEach((item, id) => {
            scoreDict[id].push(item);
        });
    })

    let answer = '';
    // 자기 자신의 점수가 유일한 최고점 혹은 유일한 최저점이면 그 점수는 제외
    Object.keys(scoreDict).map((key, id) => {
        const maxScore = Math.max(...scoreDict[key]);
        const minScore = Math.min(...scoreDict[key]);
        const maxCount = scoreDict[key].filter(ele => ele === maxScore).length;
        const minCount = scoreDict[key].filter(ele => ele === minScore).length;

        if (maxCount === 1 && maxScore === scoreDict[key][id]) {
            const maxIndex = scoreDict[key].indexOf(maxScore, 0);            
            scoreDict[key].splice(maxIndex, 1);
        } else if (minCount === 1 && minScore === scoreDict[key][id]) {
            const minIndex = scoreDict[key].indexOf(minScore, 0);
            scoreDict[key].splice(minIndex, 1);
        }

        const totScore = scoreDict[key].reduce((sum, curVal) => sum + curVal);
        const totLength = scoreDict[key].length;
        const totMean = totScore / totLength;

        // 각 학생별 평균 점수 구하기
        answer += gradeMap(totMean);
    })

    return answer;
}

exports.solution = solution;