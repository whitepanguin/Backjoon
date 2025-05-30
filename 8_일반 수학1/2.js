const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
let num = Number(input[0].split(" ")[0]);
let baseN = Number(input[0].split(" ")[1]);
// console.log(num);
// console.log(baseN);
let i = 0;
while (Math.floor(num / Math.pow(baseN, i)) >= 1) {
  //   console.log(Math.floor(num / Math.pow(baseN, i)));
  //   console.log(i);
  i++;
}
let changeN = new Array(i);
for (let j = i - 1; j > -1; j--) {
  changeN[j] = Math.floor(num / Math.pow(baseN, j));
  num = num - changeN[j] * Math.pow(baseN, j);
  //   console.log(changeN);
}

changeN.forEach((e, i) => {
  if (e >= 10) {
    e = String.fromCharCode(e + 55);
  }
  changeN[i] = e;
});
console.log(changeN.reverse().join(""));
/*
최대한 간결한 코드 (가독성 단순성 중시)
const fs = require("fs");
const [numStr, baseStr] = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "8_일반 수학1/input.txt"
).toString().trim().split(" ");

let num = Number(numStr);
const base = Number(baseStr);
let result = "";

while (num > 0) {
  let r = num % base;
  result = (r >= 10 ? String.fromCharCode(r + 55) : r) + result;
  num = Math.floor(num / base);
}

console.log(result);

성능적으로 더 나은 코드 (대량 연산 대비 구조적 코드)


*/
