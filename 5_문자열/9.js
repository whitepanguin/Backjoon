const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
let arr = input[0].split(" ");
for (let i = 0; i < input.length + 1; i++) {
  arr[i] = arr[i].split("").reverse().join("");
}
arr.map(Number);
if (arr[0] > arr[1]) {
  console.log(arr[0]);
} else {
  console.log(arr[1]);
}
