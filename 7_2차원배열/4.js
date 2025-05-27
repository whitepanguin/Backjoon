const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "7_2차원배열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);

let whitepage = new Array(100).fill(0);

for (let i = 0; i < 100; i++) {
  whitepage[i] = new Array(100).fill(0);
}
// console.log(whitepage);

let papers = Number(input[0]);
let blackpaper = [];
for (let j = 0; j < papers; j++) {
  blackpaper[j] = input[j + 1].split(" ").map(Number);
  //   console.log(blackpaper);
}

for (let k = 0; k < papers; k++) {
  let startcords = blackpaper[k];
  //   console.log(startcords);
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      whitepage[l + startcords[0]][m + startcords[1]] = 1;
    }
  }
}

let result = 0;
for (let i = 0; i < 100; i++) {
  whitepage[i].forEach((num) => {
    result += num;
  });
}
console.log(result);
