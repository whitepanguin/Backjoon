const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

let arr = input[0];

let count = 0;
let rest;
while (arr.includes("c=")) {
  arr = arr.replace("c=", ".");
  count++;
}
while (arr.includes("c-")) {
  arr = arr.replace("c-", ".");
  count++;
}
while (arr.includes("dz=")) {
  arr = arr.replace("dz=", ".");
  count++;
}
while (arr.includes("z=")) {
  arr = arr.replace("z=", ".");
  count++;
}
while (arr.includes("d-")) {
  arr = arr.replace("d-", ".");
  count++;
}
while (arr.includes("lj")) {
  arr = arr.replace("lj", ".");
  count++;
}
while (arr.includes("nj")) {
  arr = arr.replace("nj", ".");
  count++;
}
while (arr.includes("s=")) {
  arr = arr.replace("s=", ".");
  count++;
}
// console.log(arr.replaceAll(".", ""));
// console.log(arr.replaceAll(".", "").length);
count += arr.replaceAll(".", "").length;
console.log(count);
