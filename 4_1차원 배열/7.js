const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
let arr = input.map(Number);
let box = [];
for (let i = 1; i < 31; i++) {
  box[i] = i;
}
// console.log(box);
for (let j = 0; j < 28; j++) {
  box[arr[j]] = 0;
}
// console.log(box);
let result = box.filter((e) => e !== 0);
console.log(result[0]);
console.log(result[1]);
