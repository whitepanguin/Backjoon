// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
// const input = fs.readFileSync(0).toString().split(/\r\n/);

const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);
let inputN = [...input[0].split(" ")];
let inputI = [...input[1].split(" ")];

inputN = inputN.map(Number);
console.log(inputN);
console.log(inputI);
//---

const [[L, C], alphabets] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
const vowels = ["a", "e", "i", "o", "u"];
const output = [];
alphabets.sort();

const dfs = (candidate, index) => {
  if (candidate.length === +L) {
    const vowelCount = [...candidate].reduce(
      (acc, alphabet) => acc + vowels.includes(alphabet),
      0
    );
    const consonantCount = L - vowelCount;
    if (vowelCount >= 1 && consonantCount >= 2) {
      output.push(candidate);
    }
  } else {
    for (let i = index; i < C; i++) {
      dfs(candidate + alphabets[i], i + 1);
    }
  }
};

dfs("", 0);

console.log(output.join("\n"));
