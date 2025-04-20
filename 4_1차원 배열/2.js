// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
let num = input[0].split(" ");
let arr = input[1].split(" ");
const arrN = Number(num[0]);
const aim = Number(num[1]);
arr = arr.map(Number);

let result = [];
for (let i = 0; i < arrN; i++) {
  if (aim > arr[i]) {
    result.push(arr[i]);
  }
}
console.log(result);
