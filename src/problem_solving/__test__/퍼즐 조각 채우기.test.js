const { solution } = require("../퍼즐 조각 채우기");

const test1 = {
    game_board: [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],
    table: [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]],
    result: 14,
};

const test2 = {
    game_board: [[0,0,0],[1,1,0],[1,1,1]],
    table: [[1,1,1],[1,0,0],[0,0,0]],
    result: 0,
};

describe('퍼즐 조각을 채워 넣을 경우, 총 몇 칸을 채울 수 있는지', () => {
    test('test1', () => {
        expect(solution(test1.game_board, test1.table)).toEqual(test1.result);
    });

    test('test2', () => {
        expect(solution(test2.game_board, test2.table)).toEqual(test2.result);
    });
});