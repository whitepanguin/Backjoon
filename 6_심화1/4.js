const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);
// console.log(input);
const arr = input[0].split("");
let result = 0;
for (let i = 0; i < Math.floor(input[0].length / 2); i++) {
  if (arr[i] == arr[input[0].length - i - 1]) {
    // console.log("1");
    result++;
  }
}
if (result == Math.floor(input[0].length / 2)) {
  console.log("1");
} else {
  console.log("0");
}
