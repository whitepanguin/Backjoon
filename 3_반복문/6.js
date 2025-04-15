// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(/\s/);

// const input = fs.readFileSync("3_반복문/input.txt").toString().split(/\s/);
const inputfilt = input.filter((item) => item !== "");
// console.log(inputfilt);

let sum = "";
for (let i = 0; i < parseInt(inputfilt[0]); i++) {
  sum += parseInt(inputfilt[2 * i + 1]) + parseInt(inputfilt[2 * i + 2]) + "\n";
}
console.log(sum);
