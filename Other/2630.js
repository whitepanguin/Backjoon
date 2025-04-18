// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\r\n/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);

console.log(input);
let box = [];
for (let i = 0; i < Number(input[0]); i++) {
  box[i] = { ...input[i + 1].split(" ") };
}
console.log(box[7][0]);

function half(value, wpaper = 0, bpaper = 0, max) {
  let total = 0;
  if (total == max * max) {
    bpaper = bpaper + 1;
  } else if (total == 0) {
    wpaper = wpaper + 1;
  }
  let block = max / 2;
  for (let i = 0; i < block; i++) {}
}
// -------
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));
const countPaper = (n) => {
  const count = [0, 0];
  const recursion = (n, x, y) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += paper[y + j][x + i];
      }
    }
    if (total === 0) count[0]++;
    else if (total === n * n) count[1]++;
    else {
      n /= 2;
      recursion(n, x, y);
      recursion(n, x + n, y);
      recursion(n, x, y + n);
      recursion(n, x + n, y + n);
    }
  };
  recursion(n, 0, 0);
  console.log(count.join("\n"));
};
countPaper(n);
