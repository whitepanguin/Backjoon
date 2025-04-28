const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r\n/);

// console.log(input);
console.log(input[0].split(" ").length);

// GPT 센세의 답변
// 문제가 없어 보이지만, 단어 사이에 공백이 여러 번 있을 경우"Hello   World" 같은 경우 공백도 단어로 포함 시킬 수 있다는 문제점이 있다.
/*
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "5_문자열/input.txt";

const input = fs.readFileSync(file).toString().trim();

// 입력이 빈 문자열이면 0 출력
if (input === "") {
  console.log(0);
} else {
  console.log(input.split(/\s+/).length);
}
*/
// 항상 예외 처리를 생각하자
