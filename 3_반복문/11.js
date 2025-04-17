const fs = require("fs");
// let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");

let inputNum = Number(input);
let box = [];

for (let i = 0; i < inputNum; i++) {
  box[i] = "";
  for (let j = inputNum - 1; j >= 0; j--) {
    j > i ? (box[i] += " ") : (box[i] += "*");
  }
}
for (let n = 0; n < inputNum; n++) {
  console.log(box[n]);
}
