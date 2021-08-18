const { solution } = require("../009__concat을 활용한 출력 방법");
const test1 = {
    input: {
        year : '2019',
        month : '04',
        day : '26',
        hour : '11',
        minute : '34',
        second : '27',
    },
    answer: "2019/04/26 11:34:27",
};
  
describe('practice', () => {
    test('009', () => {
        expect(solution(test1.input)).toEqual(test1.answer);
    });
});