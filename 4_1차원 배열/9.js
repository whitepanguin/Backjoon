const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

console.log(input);
let arr = input.map(Number);
