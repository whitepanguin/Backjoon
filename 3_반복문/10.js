const fs = require("fs");
// let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");

console.log(input);
let box = [];

for (let i = input; i > 0; i--) {
  for (let j = input - 1; j > -1; j--) {
    j >= i ? (box[i] += " ") : (box[i] += "*");
  }
}
console.log(box);
