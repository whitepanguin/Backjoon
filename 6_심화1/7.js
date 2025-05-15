const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

console.log(input);
let count = 0;
let arr = [];
for (let k = 1; k < Number(input[0]) + 1; k++) {
  let group = new Array(input[k].length);
  for (let i = 0; i < input[k].length; i++) {
    console.log(input[k][i]);
    if (!group) {
      group = input[k][0];
    }
    if ((group = input[k][i + 1])) {
    }
  }
}
