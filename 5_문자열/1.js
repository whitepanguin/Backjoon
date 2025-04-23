const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
console.log(input[0][Number(input[1]) - 1]);
