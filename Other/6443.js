// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(/\r\n/);

// const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);

const [N, ...inputarr] = input;

function order(input) {
  const result = [];
  const charCount = new Array(26).fill(0);
  const path = [];

  // 알파벳 개수 세기
  for (let char of input) {
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const backtrack = () => {
    if (path.length === input.length) {
      result.push(path.join(""));
      return;
    }

    for (let i = 0; i < 26; i++) {
      if (charCount[i] > 0) {
        charCount[i]--;
        path.push(String.fromCharCode(i + "a".charCodeAt(0)));

        backtrack();

        path.pop();
        charCount[i]++;
      }
    }
  };

  backtrack();
  return result;
}

for (let input of inputarr) {
  const anagrams = order(input);
  for (let word of anagrams) {
    console.log(word);
  }
}
