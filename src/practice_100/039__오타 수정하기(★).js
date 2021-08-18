let alpha = prompt("입력: ");
// let change_alpha = alpha.replace(/q/gi, 'e');
// console.log(change_alpha);

/*
    [정규표현식]

    replace(/o/g,"*") : o를 *로 전체 치환한다.
    replace(/o/gi,"*") : o를 *로 대/소문자 구분 없이 전체 치환한다.

    g : 발생할 모든 pattern에 대한 전역 검색
    i : 대/소문자 구분 안함

    정규식에서 사용하는 특수문자( . ^ ( ) )를 치환할 때는 escape(\) 문자를 붙여 주어야 한다.

    str = "Hello World.";
    str = str.replace(/\./, "!");

    출력 : Hello World! 
*/

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr); // split()을 통해 해당 문자로 배열이 만들어지고, join()을 통해 해당 문자로 합쳐진다.
}

console.log(replaceAll(alpha, 'q', 'e'));