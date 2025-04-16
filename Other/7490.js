// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\s/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);
let inputN = input.map(Number);
console.log(inputN);

function makezero(N, aim = 0, endnumb = null) {
  if (endnumb == null) {
    endnumb = N;
  }
  let box = [];
  for (let i = 1; i < N + 1; i++) {
    box += i;
  }
  const choose = ["+", " ", "-"];
  for (let i = 0; i < choose.length; i++) {}
}
