// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(/\r\n/);

// const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);
let inputN = [...input[0].split(" ")];
let inputI = [...input[1].split(" ")];
inputI = inputI.map(Number);
inputN = inputN.map(Number);

function inc(value = [], answer = 0, aim = 0) {
  for (let i = 0; i < value.length; i++) {
    for (let j = i + 1; j < value.length; j++) {
      if (aim == value[i] + value[j]) {
        answer = answer + 1;
      }
    }
  }
  aim = value.pop();

  return value.length == 2 ? console.log(answer) : inc(value, answer, -aim);
}
inc(inputI, (aim = inputN[1]));
