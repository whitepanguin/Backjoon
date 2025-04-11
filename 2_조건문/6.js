// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split(/\s+/);
// 문자열 하고 짜르기
const input = fs
  .readFileSync("2_조건문/input.txt")
  .toString()
  .trim()
  .split(/\s+/);
// console.log(input[0], input[1]);

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

let hour = Math.floor((B + C) / 60);
A = A + hour;
B = B + C - 60 * hour;
if (B == 60) {
  A++;
  B = 0;
}
if (A >= 24) {
  A = A - 24;
}

console.log(`${A} ${B}`);
