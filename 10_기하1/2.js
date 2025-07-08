const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

// console.log(input);

let boxnum = [Number(input[0].split(" ")[2]), Number(input[0].split(" ")[3])];
let humnum = [Number(input[0].split(" ")[0]), Number(input[0].split(" ")[1])];

// console.log(boxnum);
// console.log(humnum);
let distx = 0;
let disty = 0;

if (boxnum[0] - humnum[0] > humnum[0]) {
  distx = humnum[0];
} else {
  distx = boxnum[0] - humnum[0];
}
if (boxnum[1] - humnum[1] > humnum[1]) {
  disty = humnum[1];
} else {
  disty = boxnum[1] - humnum[1];
}

if (distx > disty) {
  console.log(disty);
} else {
  console.log(distx);
}
