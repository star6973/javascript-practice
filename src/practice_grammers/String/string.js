let str = "Apple, Banana, Kiwi";

let sliceStr1 = str.slice(7, 13);
let sliceStr2 = str.slice(-12, -6);
console.log(sliceStr1);
console.log(sliceStr2);

let substringStr1 = str.substring(7, 13); // start, end
let substringStr2 = str.substr(7, 6); // start, length
console.log(substringStr1);
console.log(substringStr2);

let text1 = "Please visit Microsoft!";
let replaceText = text1.replace("Microsoft", "Apple");
console.log(replaceText);

let toUpperText = text1.toUpperCase();
console.log(toUpperText);

let toLowerText = text1.toLowerCase();
console.log(toLowerText);

let text2 = "Hello", text3 = "World";
let concatText = text2.concat(" ", text3);
console.log(concatText);

let text4 = "       Hello World!        ";
let trimText = text4.trim();
console.log(trimText);

let text5 = "1";
let padStartText = text5.padStart(2, "0");
let padEndText = text5.padEnd(2, "0");
console.log(padStartText);
console.log(padEndText);

let text6 = "HELLO WORLD";
let charAtText = text6.charAt(6);
console.log(charAtText);
console.log(text6[6]);

let splitText1 = text6.split(" ");
let splitText2 = text6.split("");
console.log(splitText1);
console.log(splitText2);

let indexText = text6.indexOf("W");
console.log(indexText);

let str1 = "Please locate where 'locate' occurs!";
console.log(str1.indexOf("locate"));
console.log(str1.lastIndexOf("locate"));
console.log(str1.indexOf("locate", 15)); // target_str, start_position -> last idx
console.log(str1.lastIndexOf("locate", 15)); // target_str, start_position -> first idx
console.log(str1.search("locate"));

let str2 = "The rain in SPAIN stays mainly in the plain";
console.log(str2.match(/ain/g));
console.log(str2.match(/ain/gi));

let str3 = "Hello world, welcome to the universe";
console.log(str3.includes("world"));
console.log(str3.includes("world", 12)); // target_str, start_position
console.log(str3.startsWith("Hello"));
console.log(str3.endsWith("universe"));

let str4 = "Visit W3Schools";
console.log(str4.search(/w3schools/i));
console.log(str4.replace(/w3schools/i, "Apple"));

/*
    정규표현식
*/
let str5 = "gray and grey";
console.log(str5.match(/gr[ae]y/g)); // [] 대괄호 내부의 문자열 중 하나라도 일치하는 경우

let str6 = "!?@#$%^&";
console.log(str6.match(/[?!.]/g));

let str7 = "2020 07 18 Saturday";
console.log(str7.match(/[0-9]/g)); // [0-9] == \d
console.log(str7.match(/[A-Z]/gi)); // [^0-9] == \D
console.log(str7.match(/\w/g)); // 단어인 것
console.log(str7.match(/\W/g)); // 단어가 아닌 것

let str8 = "www";
console.log(str8.match(/^w/)); // 해당 패턴식이 줄의 시작 부분인지
console.log(str8.match(/w$/)); // 해당 패턴식이 줄의 마지막 부분인지

let str9 = "create or ate";
console.log(str9.match(/\bate\b/g)); // \b: 단어의 좌우로 단어 문자가 없는 것

let str10 = "red or green or blue";
console.log(str10.match(/red|blue/g));

let str11 = "abc";
console.log(str11.match(/abc?/)); // 정규표현식은 기본적으로 탐욕적이기 때문에 가장 길게 일치하는 문자열을 반환한다
console.log(str11.match(/abc??/)); // 탐욕적이지 않게 반환하기 위해서 ?를 다시 붙인다

let str12 = "abcaabc";
console.log(str12.match(/a{1}bc/g));
console.log(str12.match(/a{2}bc/g));
console.log(str12.match(/aa?/g));
console.log(str12.match(/aa??/g));

let str13 = "aaabbbabababcabab";
console.log(str13.match(/ab+/g)); // [ab, abb, abbb, ...]를 검색
console.log(str13.match(/(ab)+/g)); // [ab, abab, ababab, ...]를 검색

let str14 = "abc cba bcab abew";
console.log(str14.match(/ab(?=c)/)); // c를 만족하면서 왼쪽에 ab가 있는 경우
console.log(str14.match(/ab(?!c)/)); // c를 만족하면서 왼쪽에 ab가 없는 경우
console.log(str14.match(/(?<=c)ab/)); // c를 만족하면서 오른쪽에 ab가 있는 경우
console.log(str13.match(/(?<!c)ab/)); // c를 만족하면서 오른쪽에 ab가 없는 경우

let str15 = "AA BB Aa Bb 24,000";
console.log(str15.match(/[0-9]/g)); // ["2", "4", "0", "0", "0"]
console.log(str15.match(/[0-9]+/g)); // ["24", "000"]
console.log(str15.match(/[0-9,]+/g)); // ["24,000"]