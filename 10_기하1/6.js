const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i]));
}
// console.log(arr);
if (arr[0] + arr[1] + arr[2] != 180) {
  console.log("Error");
} else {
  if ((arr[0] == arr[1]) | (arr[0] == arr[2]) | (arr[1] == arr[2])) {
    if (arr[0] == arr[1] && arr[0] == arr[2]) {
      console.log("Equilateral");
    } else {
      console.log("Isosceles");
    }
  } else {
    console.log("Scalene");
  }
}
