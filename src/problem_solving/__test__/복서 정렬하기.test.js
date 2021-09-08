const { solution } = require('../복서 정렬하기');

test('학생의 학점은?', () => {
    const weights1 = [50, 82, 75, 120];
    const head2head1 = ['NLWL', 'WNLL', 'LWNW', 'WWLN'];
    const result1 = [3, 4, 1, 2];
    expect(solution(weights1, head2head1) === result1);

    const weights2 = [145, 92, 86];
    const head2head2 = ['NLW', 'WNL', 'LWN'];
    const result2 = [2, 3, 1];
    expect(solution(weights2, head2head2) === result2);

    const weights3 = [60, 70, 60];
    const head2head3 = ['NNN', 'NNN', 'NNN'];
    const result3 = [2, 1, 3];
    expect(solution(weights3, head2head3) === result3);
});
