const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);
let arr = input[0].toUpperCase().split("");
// console.log(input[0].toUpperCase());

const result = {};
arr.forEach((x) => {
  result[x] = (result[x] || 0) + 1;
});
// console.log(result);
// console.log(Object.entries(result).toString());
const prt = [];
prt[0] = Object.entries(result).toString();
// console.log(prt[0].split(","));
arr = prt[0].split(",");
let high = 0;
let prt2 = [];
for (let i = 0; i < Math.round(arr.length / 2); i++) {
  //   console.log(arr[2 * i + 1]);

  if (arr[2 * i + 1] >= high) {
    high = arr[2 * i + 1];
    // console.log(high);
  }
}
for (let j = 0; j < Math.round(arr.length / 2); j++) {
  if (high == arr[2 * j + 1]) {
    prt2.push(arr[2 * j]);
  }
}
// console.log(prt2);
if (prt2.length > 1) {
  console.log("?");
} else {
  console.log(prt2[0]);
}

//------
/*
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);
const arr = input[0].toUpperCase().split("");

const result = {};
arr.forEach((x) => {
  result[x] = (result[x] || 0) + 1;
});

const entries = Object.entries(result);
let maxCount = 0;
let answer = "?";

entries.forEach(([char, count]) => {
  if (count > maxCount) {
    maxCount = count;
    answer = char;
  } else if (count === maxCount) {
    answer = "?";
  }
});

console.log(answer);

*/
