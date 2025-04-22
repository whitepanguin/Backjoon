const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
const num = input[0];
const arr = input[1].split(" ");

const maxNum = Math.max(...arr.map(Number));
let total = 0;
arr.map(Number).forEach((e) => {
  total += (e / maxNum) * 100;
});
console.log(total / num);
