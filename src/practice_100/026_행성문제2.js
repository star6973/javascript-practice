var planetary = {};
var kor_name = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
var eng_name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

for (let i=0; i<kor_name.length; i++) {
    planetary[kor_name[i]] = eng_name[i];
}

const n = prompt("입력: ");
console.log(planetary[n]);