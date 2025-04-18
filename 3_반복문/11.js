const fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().split(/\r\n/);
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(/\r\n/);

// console.log(input);

for (let i = 0; i < input.length; i++) {
  let total = 0;
  input[i] = input[i].split(" ");
  total = Number(input[i][0]) + Number(input[i][1]);

  if (total == 0) {
    break;
  } else {
    console.log(total);
  }
}
// ??? 제출이 틀렸다고 한다,,?
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  let result = A + B;

  if (result === 0) {
    break;
  } else {
    console.log(result);
  }
}
// 반대로 이건 맞는다고 한다.. 흠
