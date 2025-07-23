const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);
const arrnum = [];
outerLoop: for (let i = 0; i < input.length; i++) {
  arrnum.push(input[i].split(" ").map(Number));
  if (arrnum[i].every((v) => v === 0)) {
    // console.log("종료");
    break outerLoop;
  }
  //   console.log(arrnum[i]);
  const maxnum = Math.max(...arrnum[i]);
  //   console.log(maxnum);
  const resnum = arrnum[i].filter((v) => v !== maxnum);
  //   console.log(resnum);
  if (maxnum >= resnum[0] + resnum[1]) {
    console.log("Invalid");
  } else {
    if (arrnum[i][0] == arrnum[i][1] && arrnum[i][0] == arrnum[i][2]) {
      console.log("Equilateral");
    } else {
      if (
        arrnum[i][0] == arrnum[i][1] ||
        arrnum[i][0] == arrnum[i][2] ||
        arrnum[i][1] == arrnum[i][2]
      ) {
        console.log("Isosceles");
      } else {
        console.log("Scalene");
      }
    }
  }
}
