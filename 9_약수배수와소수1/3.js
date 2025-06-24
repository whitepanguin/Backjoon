const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "9_약수배수와소수1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);

for (let i = 0; i < input.length; i++) {
  let arr = [];
  let num = Number(input[i]);
  let total = 0;
  let cons = "";
  if (num == -1) break;
  for (let j = 1; j < num; j++) {
    if (num % j == 0) {
      //   console.log(j);
      arr.push(j);
    }
  }
  //   console.log(arr);
  arr.forEach((e) => {
    total += e;
    cons = arr.join(" + ");
  });
  //   console.log(total);
  //   console.log(cons);
  if (num == total) {
    console.log(`${num} = ${cons}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
