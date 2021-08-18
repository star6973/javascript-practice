function solution() {
    const d = new Date();
    let year = d.getTime();
    
    year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;

    return year;
}

exports.solution = solution;