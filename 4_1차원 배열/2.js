const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\r\n");

// console.log(input);
let num = input[0].split(" ");
let arr = input[1].split(" ");
const arrN = Number(num[0]);
const aim = Number(num[1]);
arr = arr.map(Number);

let result = "";
for (let i = 0; i < arrN; i++) {
  if (aim > arr[i]) {
    // result.push(arr[i]);
    result += arr[i] + " ";
  }
}
console.log(result);

// 타입 에러가 뜬다, 혹시나 해서  result.map(String) 해도 똑같이 뜨는 현상에 뭐가 다른지 확인하는 중이다.
/*
const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "4_1차원 배열/input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const line1 = input[0].split(" ");
const n = Number(line1[0]);
const x = Number(line1[1]);
// 값이 숫자로 인식하도록 해야됨
let arr = input[1].split(" ");
let result = "";
for (i = 0; i < n; i++) {
  if (arr[i] < x) {
    result += arr[i] + " ";
  }
}
console.log(result);
*/
// 아, 설마 출력에 [ '1', '4', '2', '3' ]이 1 4 2 3 랑 다르다고 판단해서 그런간가?
// 아니다 요번에도 타입 에러가 떴다.
// ... 모르겠다
