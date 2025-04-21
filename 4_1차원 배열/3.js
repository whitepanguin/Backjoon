const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
const num = input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(`${arr[0]} ${arr[num - 1]}`);
// 요번에도 타입에러,, 하지만! 왜 이런 현상이 이러났는지 알아냈다! .split("\r\n") 에서 \r을 인식 못하는거 같다. 뻬고 제출하니까 정상적으로 인식을 했다.
