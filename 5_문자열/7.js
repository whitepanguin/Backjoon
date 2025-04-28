const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
const num = input[0];
for (let i = 1; i < Number(num) + 1; i++) {
  let result = [];
  let [rep, ...arr] = input[i].split(" ");
  //   console.log(rep);
  //   console.log(arr);
  arr = arr[0].split("");
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < rep; k++) {
      result += arr[j];
    }
  }
  console.log(result);
}
