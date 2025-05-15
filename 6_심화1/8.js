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
console.log(point.map(Number));

for (let j = 0; j < score.length; j++) {
  switch (score[j]) {
    case "A+":
      score[j] = 4.5;
      result[j] = point[j];
      break;
    case "A0":
      score[j] = 4.0;
      break;
    case "B+":
      score[j] = 3.5;
      break;
    case "B0":
      score[j] = 3.0;
      break;
    case "C+":
      score[j] = 2.5;
      break;
    case "C0":
      score[j] = 2.0;
      break;
    case "D+":
      score[j] = 1.5;
      break;
    case "D0":
      score[j] = 1.0;
      break;
    case "F":
      score[j] = 0.0;
      break;

    default:
      title.splice(j, 1);
      point.splice(j, 1);
      score.splice(j, 1);
      break;
  }
}
console.log(score);
