const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
const two = ["A", "B", "C"];
const three = ["D", "E", "F"];
const four = ["G", "H", "I"];
const five = ["J", "K", "L"];
const six = ["M", "N", "O"];
const seven = ["P", "Q", "R", "S"];
const eight = ["T", "U", "V"];
const nine = ["W", "X", "Y", "Z"];
const dial = [two, three, four, five, six, seven, eight, nine];

let arr = input[0].split("");
let result = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < dial.length; j++) {
    for (let k = 0; k < dial[j].length; k++) {
      if (arr[i] == dial[j][k]) {
        result += j + 3;
      }
    }
  }
}
console.log(result);
