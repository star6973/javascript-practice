function solution(str) {
    let stack = [];
    let string = str.split("");
    let idx = 0;

    while (idx !== string.length) {
        if (Object.keys(stack).length === 0 && ["]", "}", ")"].includes(string[idx])) {
            return false;
        }
        
        if (["[", "{", "("].includes(string[idx])) {
            stack.push(string[idx]);
        } else {
            let last = stack.pop();
            if (!(string[idx] == "]" && last == "[") && !(string[idx] == "}" && last == "{") && !(string[idx] == ")" && last == "(")) {
                return false;
            }
        }
        idx++;
    }

    if (Object.keys(stack).length !== 0) return false;
    else return true;
}

exports.solution = solution;