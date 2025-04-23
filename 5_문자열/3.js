const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";
// 제출시 \r 삭제
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
for (let i = 0; i < Number(input[0]); i++) {
  console.log(
    input[i + 1].split("")[0] + input[i + 1].split("")[input[i + 1].length - 1]
  );
}
