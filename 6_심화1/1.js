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

// 저렇게 넣는 방식이 더 확실하지만, 일반적인 "" 콘솔로 찍고 싶으면 아래와 같이 하면 된다.

console.log(
  "         ,r'\"7\nr`-_   ,'  ,/\n \\. \". L_r'\n   `~\\/\n      |\n      |"
);
