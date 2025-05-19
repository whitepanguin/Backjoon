const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "7_2차원배열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

let total = new Array(Number(input[0][0]));

let inputarr1 = new Array(Number(input[0][0]));
let inputarr2 = new Array(Number(input[0][0]));
for (let i = 0; i < Number(input[0][2]); i++) {
  // console.log(i);
  inputarr1[i] = input[i + 1].split(" ");
  inputarr2[i] = input[i + 1 + Number(input[0][2])].split(" ");
  total[i] = [];
  for (let j = 0; j < Number(input[0][0]); j++) {
    total[i][j] = Number(inputarr1[i][j]) + Number(inputarr2[i][j]);
  }
}
// [
//   [1, 1, 1],
//   [2, 2, 2],
//   [0, 1, 0],
// ];
// console.log(inputarr1);
// console.log(inputarr2);
let pri = [];
// console.log(total);
for (let k = 0; k < Number(input[0][2]); k++) {
  // console.log(total[k]);
  total[k].forEach((element) => {
    // console.log(element);
    pri += `${element} `;
  });
  pri = pri.trim();
  pri += `\n`;
}
console.log(pri);
/*
// 입력받기
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf8");
// let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

// 입력값 정제
const [n, m] = input[0].split(" ");

let newMatrixA = [];
let newMatrixB = [];

for (let i = 1; i < input.length; i++) {
  let newArr = input[i].split(" ");

  newArr = newArr.map((item) => Number(item));

  if (i <= n) {
    newMatrixA.push(newArr);
  } else {
    newMatrixB.push(newArr);
  }
}

// 풀이
function solution(n, m, newMatrixA, newMatrixB) {
  const answerMatrix = [];

  for (let i = 0; i < n; i++) {
    answerMatrix.push([]);
    for (let j = 0; j < m; j++) {
      answerMatrix[i].push(newMatrixA[i][j] + newMatrixB[i][j]);
    }
  }

  return answerMatrix;
}

// 출력
let answerStr = "";
let answerMatrix = solution(n, m, newMatrixA, newMatrixB);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answerStr += `${answerMatrix[i][j]} `;
  }
  answerStr += `\n`;
}

console.log(answerStr);
*/
