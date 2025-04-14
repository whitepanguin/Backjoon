// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
// 문자열 하고 짜르기
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");
// console.log(input[0], input[1]);

let A = parseInt(input);
for (let i = 0; i < 9; i++) {
  console.log(`${A} * ${i + 1} = ${A * (i + 1)}`);
}
