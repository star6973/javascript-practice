function solution(graph, start) {
    let visited = [];
    let stack = [start];

    while (stack.length !== 0) {
        let n = stack.pop();

        if (!visited.includes(n)) {
            visited.push(n);

            let sub = graph[n].filter(el => !visited.includes(el));
            for (let i of sub) {
                stack.push(i);
            }
        }
    }

    return visited;
}

exports.solution = solution;