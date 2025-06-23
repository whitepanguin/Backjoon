const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

// console.log(input);
let arr = [];
for (let i = 0; i < input.length - 1; i++) {
  arr[i] = [];
  arr[i] = input[i].split(" ").map(Number);
}
console.log(arr);
for (let j = 0; j < arr.length; j++) {
  let result;
  let firstnum = arr[j][0];
  let secondnum = arr[j][1];

  if (secondnum % firstnum === 0) {
    console.log("factor");
  } else if (firstnum % secondnum === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}

// 0 0 만나면 멈춰야하는 조건임으로 input.length - 1 론 불충분하다

/*
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) break;

  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
*/
