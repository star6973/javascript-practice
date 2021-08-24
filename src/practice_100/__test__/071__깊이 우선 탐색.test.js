const {solution} = require("../071__깊이 우선 탐색(★)");
const test1 = {
    graph: {
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F'],
        'E': ['D', 'A'],
        'F': ['D'],
    },
    answer: ['E','A','B','C','D','F'],
}

describe('practice', () => {
    test('071', () => {
        expect(solution(test1.graph, 'E')).toEqual(test1.answer);
    });
});