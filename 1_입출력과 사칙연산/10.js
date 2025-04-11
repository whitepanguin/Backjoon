// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 문자열 하고 짜르기
// const input = fs.readFileSync("input.txt").toString().split(" ");

console.log(parseInt(input[0]) * parseInt(input[1][2]));
console.log(parseInt(input[0]) * parseInt(input[1][1]));
console.log(parseInt(input[0]) * parseInt(input[1][0]));
console.log(parseInt(input[0]) * parseInt(input[1]));
