const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";
// 제출시 \r 삭제
const input = fs.readFileSync(file).toString().trim().split("\r\n");

console.log(input[0].length);
