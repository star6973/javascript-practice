const { solution } = require('../직업군 추천하기');

test('가장 높은 점수의 직업군은?', () => {
    const table1 = [
        'SI JAVA JAVASCRIPT SQL PYTHON C#',
        'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
        'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
        'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
        'GAME C++ C# JAVASCRIPT C JAVA',
    ];
    const languages1 = ['PYTHON', 'C++', 'SQL'];
    const preference1 = [7, 5, 5];
    const result1 = 'HARDWARE';
    expect(solution(table1, languages1, preference1) === result1);

    const table2 = [
        'SI JAVA JAVASCRIPT SQL PYTHON C#',
        'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
        'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
        'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
        'GAME C++ C# JAVASCRIPT C JAVA',
    ];
    const languages2 = ['JAVA', 'JAVASCRIPT'];
    const preference2 = [7, 5];
    const result2 = 'PORTAL';
    expect(solution(table2, languages2, preference2) === result2);
});
