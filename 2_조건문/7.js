// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
// 문자열 하고 짜르기
// const input = fs.readFileSync("2_조건문/input.txt").toString().split(" ");
// console.log(input[0], input[1]);

let A = parseInt(input.sort()[0]);
let B = parseInt(input.sort()[1]);
let C = parseInt(input.sort()[2]);

let price = 0;
if (C == B && B == A) {
  price = 10000 + C * 1000;
  console.log(price);
} else if (C == B || B == A) {
  price = 1000 + B * 100;
  console.log(price);
} else {
  price = C * 100;
  console.log(price);
}
