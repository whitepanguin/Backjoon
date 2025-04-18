const fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().split(/\r\n/);
// const input = fs.readFileSync("3_반복문/input.txt").toString().split(/\r\n/);

// console.log(input);

for (let i = 0; i < input.length; i++) {
  let total = 0;
  input[i] = input[i].split(" ");
  total = parseInt(input[i][0]) + parseInt(input[i][1]);

  console.log(total);
}
//------
var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  let result = A + B;

  console.log(result);
}
// ????? 뭐지 질문 게시판에서 node.js의 경우 이상하게 input.length -1을 해줘야 맞았다고 판단한다고 한다...
