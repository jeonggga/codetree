const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ");
let a_m = Number(a[0]);
let a_e = Number(a[1]);

let b = input[1].split(" ");
let b_m = Number(b[0]);
let b_e = Number(b[1]);

if ((a_m > b_m) && (a_e > b_e)) {
    console.log(1);
} else {
    console.log(0);
}