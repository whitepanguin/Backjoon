const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "7_2차원배열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
// console.log(input[0].split(" ").map(Number));
// console.log(Math.max(...input[0].split(" ").map(Number)));

let maxValue = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
  maxValue.push(Math.max(...input[i].split(" ").map(Number)));
  // console.log(maxValue);
}
result = Math.max(...maxValue);
// console.log(result);

// console.log(input[4].split(" ").map(Number).indexOf(result));
for (let j = 0; j < input.length; j++) {
  if (input[j].split(" ").map(Number).indexOf(result) !== -1) {
    console.log(
      `${result}
${j + 1} ${input[j].split(" ").map(Number).indexOf(result) + 1}`
    );
    break;
  }
}
// 틀렸다 뭐가 문제? 최댓값이 여러 번 등장하면 여러 번 출력되는 구조야. 하지만 문제는 처음 등장한 위치만 요구하고 있어. 가 피드백이다

// 나의 의문점 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다. 여기서 최댓값이 두개 이상인 경우 그 중 한곳의 위치를 출력하는데, 왜 내 코드는 틀렸을 까? -->

// 내 코드의 경우 최대값이 여러개 있을 경우, 여러 줄을 출력을 하기 떄문에 문제였다. break 추가 했다 하지만 오답 처리,, 뭐가 문제일까

/*
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(l => l.split(" ").map(Number));

let max = -1, row = 0, col = 0;

input.forEach((line, i) => {
  line.forEach((num, j) => {
    if (num > max) [max, row, col] = [num, i + 1, j + 1];
  });
});

console.log(max);
console.log(`${row} ${col}`);

*/
