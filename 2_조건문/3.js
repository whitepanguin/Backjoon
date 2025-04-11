// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// 문자열 하고 짜르기
// const input = fs.readFileSync("2_조건문/input.txt").toString().split(" ");
// console.log(input[0], input[1]);

const A = parseInt(input);
// const B = parseInt(input[1]);

if (A % 4 == 0) {
  if (A % 100 !== 0) {
    console.log(1);
    return;
  }
  if (A % 400 == 0) {
    console.log(1);
    return;
  }
  console.log(0);
} else {
  console.log(0);
}
