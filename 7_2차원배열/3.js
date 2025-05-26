const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "7_2차원배열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);
let result = [];
let maxlength = 0;
input.forEach((e) => (e.length > maxlength ? (maxlength = e.length) : ""));
// console.log(maxlength);
let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = new Array(maxlength).fill("");
  for (let j = 0; j < input[i].length; j++) {
    arr[i][j] = input[i].split("")[j];
  }
}
// console.log(arr);
for (let l = 0; l < maxlength; l++) {
  for (let k = 0; k < 5; k++) {
    result += arr[k][l];
  }
}
console.log(result.trim());
// 런타임 에러(TypeError)
/*
해당 백준 코드에서 런타임 에러(Runtime Error)가 발생하는 가장 가능성 높은 이유는 입력 데이터가 5줄이 아닐 경우, 즉 input[i]가 undefined가 되는 경우입니다.

문제 요약
코드는 총 5줄의 문자열을 입력으로 받고, 이를 세로로 읽어서 출력하는 방식입니다.
하지만 입력이 5줄보다 적으면 input[i]가 undefined가 되어 .length를 접근할 때 TypeError가 발생해 런타임 에러가 납니다.

1. 입력이 부족한 경우 빈 문자열로 처리하기
for (let i = 0; i < 5; i++) {
  const line = input[i] || ""; // 입력이 없으면 빈 문자열
  arr[i] = new Array(maxlength).fill("");
  for (let j = 0; j < line.length; j++) {
    arr[i][j] = line[j];
  }
}

2. 최종 출력 시 undefined 또는 빈 문자열 처리
for (let l = 0; l < maxlength; l++) {
  for (let k = 0; k < 5; k++) {
    if (arr[k][l]) result += arr[k][l];
  }
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "7_2차원배열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

let result = "";
let maxlength = 0;

// 최대 길이 구하기
input.forEach((e) => {
  if (e.length > maxlength) maxlength = e.length;
});

let arr = [];

for (let i = 0; i < 5; i++) {
  const line = input[i] || ""; // 입력이 없으면 빈 문자열로
  arr[i] = new Array(maxlength).fill("");
  for (let j = 0; j < line.length; j++) {
    arr[i][j] = line[j];
  }
}

for (let l = 0; l < maxlength; l++) {
  for (let k = 0; k < 5; k++) {
    if (arr[k][l]) result += arr[k][l];
  }
}

console.log(result.trim());


*/
