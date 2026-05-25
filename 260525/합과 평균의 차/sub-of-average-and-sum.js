const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let d = a + b + c;
let e = d / 3;
let f = d - e;

console.log(d);
console.log(e);
console.log(f);