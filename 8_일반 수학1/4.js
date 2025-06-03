const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
// 1 -> 2 -> 3 -> 4
// 2^n +1
// 3 -> 5 -> 9 -> 17
// 2n-1
// 2(2^n+1)-1
// 2^(n+1)+1
let num = Number(input[0]);
let num2 = Math.pow(2, num) + 1;
// console.log(num2);
console.log(Math.pow(num2, 2));
