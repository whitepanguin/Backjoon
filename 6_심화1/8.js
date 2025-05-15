const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

let title = new Array(input.length);
let point = new Array(input.length);
let score = new Array(input.length);
let result = new Array(input.length);
for (let i = 0; i < input.length; i++) {
  title[i] = input[i].split(" ")[0];
  point[i] = input[i].split(" ")[1];
  score[i] = input[i].split(" ")[2];
}
// console.log(point.map(Number));

for (let j = 0; j < score.length; j++) {
  switch (score[j]) {
    case "A+":
      score[j] = 4.5;
      result[j] = Number(point[j]) * score[j];
      break;
    case "A0":
      score[j] = 4.0;
      result[j] = Number(point[j]) * score[j];
      break;
    case "B+":
      score[j] = 3.5;
      result[j] = Number(point[j]) * score[j];
      break;
    case "B0":
      score[j] = 3.0;
      result[j] = Number(point[j]) * score[j];
      break;
    case "C+":
      score[j] = 2.5;
      result[j] = Number(point[j]) * score[j];
      break;
    case "C0":
      score[j] = 2.0;
      result[j] = Number(point[j]) * score[j];
      break;
    case "D+":
      score[j] = 1.5;
      result[j] = Number(point[j]) * score[j];
      break;
    case "D0":
      score[j] = 1.0;
      result[j] = Number(point[j]) * score[j];
      break;
    case "F":
      score[j] = 0.0;
      result[j] = Number(point[j]) * score[j];
      break;

    default:
      title.splice(j, 1);
      point.splice(j, 1);
      score.splice(j, 1);
      result.splice(j, 1);
      break;
  }
}
let total = 0;
result.forEach((e) => {
  total += e;
});
let sum = 0;
point.map(Number).forEach((e) => {
  sum += e;
});

console.log((total / sum).toFixed(6));

//----
/*
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

const table = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
let major = 0;
let total = 0;

for (let [a, b, c] of input) {
  if (c === "P") continue;
  major += Number(b) * Number(table[c]);
  total += Number(b);
}
console.log(major / total);
*/
