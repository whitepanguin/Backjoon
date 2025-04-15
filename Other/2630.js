// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\r\n/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);

console.log(input);
let box = [];
for (let i = 0; i < Number(input[0]); i++) {
  box[i] = { ...input[i + 1].split(" ") };
}
console.log(box[7][0]);

function half(value, wpaper = 0, bpaper = 0, max) {
  let total = 0;
  if (total == max * max) {
    bpaper = bpaper + 1;
  } else if (total == 0) {
    wpaper = wpaper + 1;
  }
  let block = max / 2;
  for (let i = 0; i < block; i++) {}
}
