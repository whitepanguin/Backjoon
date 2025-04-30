const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
