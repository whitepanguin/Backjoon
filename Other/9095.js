// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\s/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);

console.log(input);

function isAdded(value, num3 = null, box = null) {
  if (num3 === null) {
    num3 = Math.floor(value / 3);
  }
  if (box === null) {
    if (value % 3 == 0) {
      box = num3;
    } else {
      box = num3 + 1;
    }
  }
}
// 1 dfs 풀이
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((n) => Number(n));

for (let i = 1; i <= input.length - 1; ++i) {
  let target = input[i];

  let dp = new Array(target + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= target; ++j) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }

  console.log(dp[target]);
}
// 2 재귀함수 풀이
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((n) => Number(n));

for (let i = 1; i <= input.length - 1; ++i) {
  let target = input[i];
  let answer = 0;
  let dfs = (sum) => {
    if (sum === target) {
      answer += 1;
      return;
    }

    for (let j = 1; j <= 3; ++j) {
      if (sum + j > target) {
        continue;
      }
      dfs(sum + j);
    }
  };
  dfs(0);
  console.log(answer);
}
