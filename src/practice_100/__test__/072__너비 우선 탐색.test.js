const {solution} = require("../072__너비 우선 탐색(★)");
const test1 = {
    graph: {
        'E': ['D', 'A'],
        'F': ['D'],
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F'],
    },
    answer: ['E','D','A','F','C','B'],
}

describe('practice', () => {
    test('071', () => {
        expect(solution(test1.graph, 'E')).toEqual(test1.answer);
    });
});