function solution(block, rule) {
    let result = [];

    rule = rule.split("");
    block.forEach((val, idx) => {
        val = val.split("").filter(item => rule.includes(item));
        let filteredBlock = rule.filter(item => val.includes(item));

        val.join("") === filteredBlock.join("") ? result.push("가능") : result.push("불가능");
    })
    return result;
}
/*
    function check(blockPart, rule) {
        let ruleIndex = 0;

        for (let char of blockPart) {
            if (rule.includes(char)) {
                if (ruleIndex > rule.indexOf(char)) return "불가능"
                ruleIndex = rule.indexOf(char);
            }
        }
        return "가능";
    }

    function solution(block, rule) {
        let result = [];
        
        for (let blockPart of block) {
            result.push(check(blockPart, rule))
        }
        return result;
    }
*/

exports.solution = solution;