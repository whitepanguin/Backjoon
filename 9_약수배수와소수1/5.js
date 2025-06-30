const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split("\n");

// console.log(input);

const firnum = Number(input[0]);
const secnum = Number(input[1]);
const bewnum = secnum - firnum + 1;
let totalnum = 0;
let arrnum = [];
for (let i = 0; i < bewnum; i++) {
  //   console.log(firnum + i);
  let odnum = firnum + i;
  let count = 0;
  for (let j = 2; j < odnum; j++) {
    if (odnum % j == 0) {
      count++;
    }
  }
  if (odnum > 1 && count === 0) {
    arrnum.push(odnum);
  }
}
if (arrnum.length === 0) {
  console.log(-1);
} else {
  //   console.log(arrnum);
  arrnum.map((e) => {
    totalnum += e;
  });
  console.log(totalnum);
  console.log(arrnum[0]);
}
