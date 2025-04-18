// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\r\n/);
// 문자열 하고 짜르기
// const input = fs
//   .readFileSync("4_1차원 배열/input.txt")
//   .toString()
//   .split(/\r\n/);

// console.log(input);
let N = input[0];
let arr = input[1];
let aim = input[2];

input[1] = input[1].split(" ");
// console.log(input[1]);
console.log(input[1].filter((e) => input[2] == e).length);
