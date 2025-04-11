/*const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else {
  console.log(4);
}
*/
// --------------------- 위 코드는 런타임 에러가 계속 난다
// 아래 코드로 하면 해결이 된다.
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (B > 0 && A < 0) {
  console.log(2);
} else if (B < 0 && A < 0) {
  console.log(3);
} else {
  console.log(4);
}
// 파일 경로 문제인거 같기도 하다
