const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "11_시간 복잡도/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

console.log(input);
