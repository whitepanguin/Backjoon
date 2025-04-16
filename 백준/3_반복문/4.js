// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s/);

// const input = fs
//   .readFileSync("3_반복문/input.txt")
//   .toString()
//   .trim()
//   .split(/\s/);

// console.log(input);
const inputfilt = input.filter((item) => item !== "");

const total = inputfilt[0];
const numb = inputfilt[1];
let add = 0;
for (let i = 0; i < numb; i++) {
  add += parseInt(inputfilt[2 * i + 2]) * parseInt(inputfilt[2 * i + 3]);
}
if (add == total) {
  console.log("Yes");
} else {
  console.log("No");
}
