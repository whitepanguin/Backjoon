const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

console.log(input);

let leng = Number(input[0]);
let arr = input[1].split(" ").map(Number);

for (let i = 0; i < leng; i++) {
  let num = arr[i];
  for (let j = 0; j < num; j++) {
    if (j % num == 0) {
    }
  }
}
