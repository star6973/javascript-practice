function solution() {
    const string = "aacdddddddddfffffffffgghhh";
    const numA = !string.match(/a/g) ? 0 : string.match(/a/g).length;
    const numB = !string.match(/b/g) ? 0 : string.match(/b/g).length;
    const numC = !string.match(/c/g) ? 0 : string.match(/c/g).length;
    const numD = !string.match(/d/g) ? 0 : string.match(/d/g).length;
    const numE = !string.match(/e/g) ? 0 : string.match(/e/g).length;
    const numF = !string.match(/f/g) ? 0 : string.match(/f/g).length;
    const numG = !string.match(/g/g) ? 0 : string.match(/g/g).length;
    const numH = !string.match(/h/g) ? 0 : string.match(/h/g).length;

    return `${numA}${numB}${numC}${numD}${numE}${numF}${numG}${numH}`;
}

exports.solution = solution;