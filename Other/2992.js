// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(" ");

const input = fs.readFileSync("Other/input.txt").toString().split(" ");

console.log(input);
function findnumb(value) {
  const aim = Number(value);
  let numbers = value.toString().split("").sort();
  console.log(numbers);
}
findnumb(input);
