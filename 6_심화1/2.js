const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

let inputchess = input[0].split(" ").map(Number);
const chess = [1, 1, 2, 2, 2, 8];
// console.log(inputchess);
for (let i = 0; i < chess.length; i++) {
  inputchess[i] = chess[i] - inputchess[i];
}
console.log(inputchess.join(" "));
