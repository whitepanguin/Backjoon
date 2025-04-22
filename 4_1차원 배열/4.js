const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
let arr = input.map(Number);
let hig = arr[0];
let num = 1;

for (let i = 1; i < arr.length; i++) {
  if (hig < arr[i]) {
    hig = arr[i];
    num = i + 1;
  }
}
console.log(hig);
console.log(num);
// 역시 다른 방법 있었다. 더 쉬운 방법
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);
