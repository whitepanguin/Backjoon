const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

// console.log(input);
let mnum = Number(input[0].split(" ")[0]);
// console.log(mnum);
let findnum = Number(input[0].split(" ")[1]);

let arr = [];
for (let i = 1; i < mnum + 1; i++) {
  if (mnum % i == 0) {
    arr.push(i);
  }
}
// console.log(arr);
if (arr.length < findnum) {
  console.log(0);
} else {
  console.log(arr[findnum - 1]);
}
