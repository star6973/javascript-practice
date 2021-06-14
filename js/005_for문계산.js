var a = 10;
var b = 2;

for (var i = 1; i < 5; i+=2) { // i = 1, 3(2씩 증가했기 때문에)
    a += i;
}

console.log(a + b); // a = 14, b = 2