const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

// console.log(input[0]);
const num = Number(input[0]);
let arrnum = [];
let totalnum = num;
let i = 2;

while (i <= totalnum) {
  if (totalnum % i === 0) {
    arrnum.push(i);
    totalnum = totalnum / i;
  } else {
    i++;
  }
}

for (let j = 0; j < arrnum.length; j++) {
  console.log(arrnum[j]);
}
