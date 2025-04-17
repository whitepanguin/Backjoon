// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");

// const input = fs.readFileSync("3_반복문/input.txt").toString().split(" ");

// console.log(input);

N = parseInt(input); // N은 4의 배수
loop = N / 4;
bag = [];
for (let i = 0; i < loop; i++) {
  bag += "long ";
}
bag += "int";
console.log(bag);
