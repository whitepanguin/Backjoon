// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
// 문자열 하고 짜르기
// const input = fs.readFileSync("2_조건문/input.txt").toString().split(" ");
// console.log(input[0], input[1]);

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45) {
  if (H == 0) {
    H = 24;
  }
  H--;
  M = M + 60 - 45;
} else {
  M = M - 45;
}
console.log(`${H} ${M}`);
