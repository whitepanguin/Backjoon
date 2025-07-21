const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);
const totnum = Number(input[0]);
const arrnum = new Array();
for (let i = 0; i < totnum; i++) {
  arrnum.push(input[i + 1].split(" ").map(Number));
}
// console.log(arrnum);
let x = 0;
let y = 0;
let result = 0;

const xValues = arrnum.map((p) => p[0]);
const yValues = arrnum.map((p) => p[1]);
const maxXDiff = Math.max(...xValues) - Math.min(...xValues);
const maxYDiff = Math.max(...yValues) - Math.min(...yValues);

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
    console.log(maxXDiff * maxYDiff);
    break;
  case 4:
    console.log(maxXDiff * maxYDiff);
    break;
}

//-----
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "10_기하1/input.txt";
// const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// const totnum = Number(input[0]);
// const arrnum = input.slice(1).map(line => line.split(" ").map(Number));

// if (totnum === 1) {
//   console.log(0);
// } else if (totnum === 2) {
//   const [x1, y1] = arrnum[0];
//   const [x2, y2] = arrnum[1];
//   const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
//   console.log(area);
// } else {
//   const xValues = arrnum.map(p => p[0]);
//   const yValues = arrnum.map(p => p[1]);
//   const maxXDiff = Math.max(...xValues) - Math.min(...xValues);
//   const maxYDiff = Math.max(...yValues) - Math.min(...yValues);
//   console.log(maxXDiff * maxYDiff);
// }

//Math.abs 절대값을 구하는 함수
