const fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");

let box = [];
for (let i = 0; i < input; i++) {
  box[i] = "";
  for (let j = 0; j < i + 1; j++) {
    box[i] += "*";
  }
}
for (let j = 0; j < input; j++) {
  console.log(box[j]);
}
