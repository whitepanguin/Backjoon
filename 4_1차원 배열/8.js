const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
let arr = input.map(Number);
let box = [];
arr.forEach((e, index) => {
  box[index] = e % 42;
});
let uniquearr = [...new Set(box)];
// console.log(box);
console.log(uniquearr.length);
