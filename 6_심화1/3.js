const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);
let num = Number(input[0]);
// console.log(num);
let star = 0;
let blank = 0;

for (let j = 0; j < num * 2 - 1; j++) {
  if (num > j) {
    star = 2 * j + 1;
    blank = -j + (num - 1);
  } else {
    star = -2 * j + (4 * num - 3);
    blank = j - (num - 1);
  }
  let printstar = [];
  for (let i = 0; i < blank; i++) {
    printstar += " ";
  }
  for (let k = 0; k < star; k++) {
    printstar += "*";
  }
  console.log(printstar);
}
