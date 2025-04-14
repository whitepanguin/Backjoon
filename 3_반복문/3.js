// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
// 문자열 하고 짜르기
// const input = fs
//   .readFileSync("3_반복문/input.txt")
//   .toString()
//   .trim()
//   .split(" ");
// console.log(input);
let total = 0;
for (let i = 0; i < input; i++) {
  total += i + 1;
}
console.log(total);
