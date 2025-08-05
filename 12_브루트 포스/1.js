const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "12_브루트 포스/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\r\n");

console.log(input);
console.log(input[0]);
console.log(input[1]);
let leng = input[0].split(" ").map(Number)[0];
let target = input[0].split(" ").map(Number)[1];
let arrnum = input[1].split(" ").map(Number);
let maxarr = [];
for (let i = 0; i < leng; i++) {
  const max1 = Math.max(...arrnum);
  maxarr.push(max1);
  const index = arrnum.indexOf(max1);
  arrnum.splice(index, 1);
}
console.log(maxarr);
