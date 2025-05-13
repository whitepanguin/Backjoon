const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

console.log(input);
let count = 0;
let group;
let prev;
for (let k = 0; k < Number(input[0]); k++) {
  for (let i = 0; i < input[k + 1].length; i++) {
    group = input[k + 1][i];
    input[k + 1];
  }
}
// console.log(count);
