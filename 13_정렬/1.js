const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "13_정렬/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

const N = Number(input[0]); // 첫 줄: 숫자의 개수
const arrnum = input
  .slice(1, N + 1)
  .map(Number)
  .sort((a, b) => a - b);

arrnum.forEach((num) => console.log(num));
