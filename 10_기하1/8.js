const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);
const [a, b, c] = input[0]
  .split(" ")
  .map(Number)
  .sort((x, y) => x - y);

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log((a + b) * 2 - 1);
}

console.log("2");
