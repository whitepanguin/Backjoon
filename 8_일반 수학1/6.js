const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

console.log(input);

// 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> 1/3 -> 1/4
// 1, 2, 4, 7, 11, 16
