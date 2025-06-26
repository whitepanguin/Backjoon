const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);

let leng = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let count = 0;
for (let i = 0; i < leng; i++) {
  let od = 0;
  let num = arr[i];
  for (let j = 1; j < num; j++) {
    // console.log(num % j == 0);
    if (num % j == 0) {
      od++;
    }
  }
  if (od == 1) {
    count++;
  }
}
console.log(count);
