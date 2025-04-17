const fs = require("fs");
// let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");

console.log(input);
let box = [];
for (let i = 0; i < input; i++) {
  for (let j = 0; j < i + 1; j++) {
    box[i] += "*";
  }
}
console.log(box);
