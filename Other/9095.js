// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\s/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);

console.log(input);

function isAdded(value, num3 = null, box = null) {
  if (num3 === null) {
    num3 = Math.floor(value / 3);
  }
  if (box === null) {
    if (value % 3 == 0) {
      box = num3;
    } else {
      box = num3 + 1;
    }
  }
}
