// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(/\s/);
// 문자열 하고 짜르기
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(/\s/);
/*
const inputfilt = input.filter((item) => item !== "");

console.log(inputfilt);

const [T, ...value] = inputfilt; // 아마 백준은 이 코드를 못 이해하는거 같다

for (let i = 0; i < T; i++) {
  console.log(
    `Case #${i + 1}: ${Number(value[2 * i])} + ${Number(value[2 * i + 1])} = ${
      Number(value[2 * i]) + Number(value[2 * i + 1])
    }`
  );
}
*/
/*
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let tmp = input[i].split(" ");
  console.log(
    `Case #${i}: ${Number(tmp[0])} + ${Number(tmp[1])} = ${
      Number(tmp[0]) + Number(tmp[1])
    }`
  );
}
*/
