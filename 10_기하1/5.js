const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

console.log(input);
const totnum = Number(input[0]);
const arrnum = new Array();
for (let i = 0; i < totnum; i++) {
  arrnum.push(input[i + 1].split(" ").map(Number));
}
console.log(arrnum);
let x = 0;
let y = 0;
let result = 0;
switch (totnum) {
  case 1:
    console.log(0);
    break;
  case 2:
    x = arrnum[0][0] - arrnum[1][0];
    y = arrnum[0][1] - arrnum[1][1];
    result = x * y;
    if (result < 0) {
      console.log(-result);
    } else {
      console.log(result);
    }
    break;
  case 3:
    [arrnum[0][0] - arrnum];

    break;
  case 4:
    console.log(0);
    break;

  default:
    break;
}
