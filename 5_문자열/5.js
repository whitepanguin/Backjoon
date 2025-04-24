const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";
// 제출시 \r 삭제
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
const num = input[0];
let arr = input[1].split("").map(Number);
let total = 0;
for (let i = 0; i < num; i++) {
  total += arr[i];
}
console.log(total);
