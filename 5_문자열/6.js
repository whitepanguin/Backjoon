const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";
// 제출시 \r 삭제
const input = fs.readFileSync(file).toString().trim().split("");

// console.log(input);
const alfa = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// alfa.forEach((e) => {
//    console.log(e.charCodeAt());
// });
// a=97, z=122
// const breakinput = input[0].split("");
// console.log(breakinput);
let arr = new Array(26).fill(-1);
// console.log(arr.fill(-1));
for (let i = input[0].length; i > -1; i--) {
  for (let j = 0; j < alfa.length; j++) {
    if (input[i] == alfa[j]) {
      arr[j] = i;
      //   console.log(i);
    }
  }
}
console.log(arr);
// 위 코드는 출력이 잘 나오는데, 계속 답이 틀렸다고 한다.
// 아래는 GPT o4의 코드다
/*
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "5_문자열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("");

let arr = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const idx = input[i].charCodeAt() - 97; // 'a'의 아스키 코드 97
  if (arr[idx] === -1) {
    arr[idx] = i;
  }
}

console.log(arr.join(" "));

*/
