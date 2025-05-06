const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "6_심화1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

let a = `         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`;
console.log(a);
