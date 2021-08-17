// 맨해튼 거리가 2이하인 경우 거리두기가 지켜지지 않음
function check(x, y, rooms) {
    // 상
    // 상1
    if (y-2 >= 0) {
        if (rooms[x][y-2] == 'P')
    }

    // 상2

    // 좌 대각선 상

    // 좌

    // 좌 대각선 하

    // 하

    // 우 대각선 하

    // 우

    // 우 대각선 상



}

function solution(places) {
    console.log(places);
    let answer;
    const flag = [[0, -1], [0, 1], [-1, 0], [1, 0]] // 상, 하, 좌, 우

    places.forEach(item => {
        for (let i=0; i<item.length; i++) {
            for (let j=0; j<item[i].length; j++) {
                if (item[i][j] == 'P') {
                    // 주변 
                } else if (item[i][j] == 'O') {
                    
                } else {

                }
            }
        }
    })

    return answer;
}

exports.solution = solution;