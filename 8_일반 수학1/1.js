const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);

let baseN = input[0].split(" ")[1];
let num = input[0].split(" ")[0].toLowerCase();
let numarr = [];
// a = 97 console.log("a".charCodeAt())
// console.log(baseN);
num.split("").forEach((e, i) => {
  if (e.charCodeAt() > 57) {
    e = e.charCodeAt() - 87;
  }
  numarr[i] = e;
});
// console.log(numarr);
let result = 0;
// Math.pow(7,3) => 343
for (let i = 0; i < num.length; i++) {
  result += Math.pow(baseN, i) * numarr[num.length - i - 1];
}
console.log(result);

// ---
/*
const fs = require("fs");
const file =
  process.platform === "linux" ? "/dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim();
const [numStr, baseStr] = input.split(" ");
const base = Number(baseStr);

const result = numStr
  .toLowerCase()
  .split("")
  .reduce((acc, char) => acc * base + parseInt(char, base), 0);

console.log(result);

*/
