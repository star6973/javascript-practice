const { solution } = require("../068__버스 시간표");
const test1 = {
    input: {
        schedule: ["12:30", "13:20", "14:13"],
        time: "12:40",
    },
    answer: ['지나갔습니다', '00시간 40분', '01시간 33분'],
};

describe('practice', () => {
    test('068', () => {
      expect(solution(test1.input.schedule, test1.input.time)).toEqual(test1.answer);
    });
});