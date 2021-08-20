const { solution } = require("../065__변형된 리스트");
const test1 = {
    input: {
        list1: [1, 2, 3, 4],
        list2: ["a", "b", "c", "d"],
    },
    answer: [[1, "a"], ["b", 2], [3, "c"], ["d", 4]],
}

describe('practice', () => {
    test('065', () => {
      expect(solution(test1.input.list1, test1.input.list2)).toEqual(test1.answer);
    });
});