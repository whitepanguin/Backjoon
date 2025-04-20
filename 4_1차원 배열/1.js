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

arr = input[1].split(" ");
// console.log(input[1]);
console.log(arr.filter((e) => aim == e).length);
// 런타임 에러
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
// const input = fs.readFileSync(file).toString().trim().split("\n");

const t = input[0];
const arry = input[1].split(" ");
const v = input[2];

let result = 0;
for (i = 0; i < t; i++) {
  if (arry[i] === v) {
    result++;
  }
}
console.log(result);
// 이건 왜 통과 했을까, 나랑 뭐가 다른건가
