// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(/\s/);
// 문자열 하고 짜르기
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(/\s/);
const inputfilt = input.filter((item) => item !== "");

for (let i = 0; i < inputfilt[0]; i++) {
  console.log(
    `Case #${i + 1}: ${
      Number(inputfilt[2 * i + 1]) + Number(inputfilt[2 * i + 2])
    }`
  );
}
