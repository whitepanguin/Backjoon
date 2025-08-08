const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "13_정렬/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

console.log(input);
