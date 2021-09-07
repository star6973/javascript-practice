function solution(table, languages, preference) {
    let langDict = {};
    for (let i = 0; i < table.length; i++) {
        let jobTable = table[i].split(' ');
        let job = jobTable[0];

        langDict[job] = {};
        for (let j = 0; j < languages.length; j++) {
            langDict[job][languages[j]] =
                jobTable.indexOf(languages[j]) !== -1
                    ? 6 - jobTable.indexOf(languages[j])
                    : 0;
        }
    }

    let langPref = {};
    for (let i = 0; i < languages.length; i++) {
        langPref[languages[i]] = preference[i];
    }

    // 점수 구하기
    let result = Object.keys(langDict).map((key) => {
        let temp = {};
        temp['job'] = key;
        temp['score'] = Object.keys(langDict[key])
            .map((k) => langDict[key][k] * langPref[k])
            .reduce((a, b) => {
                return a + b;
            });
        return temp;
    });

    // 정렬하기(점수가 같은 경우 사전 순으로 더 빠른 직업을 반환)
    result = result.sort(
        (a, b) => a.score - b.score || b.job.localeCompare(a.job),
    );

    return result.pop()['job'];
}

exports.solution = solution;
