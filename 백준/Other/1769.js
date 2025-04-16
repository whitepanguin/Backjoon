// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0).toString().split(/\s/);

// const input = fs.readFileSync("Other/input.txt").toString().split(/\r\n/);
let V = Number(input);

function divi(value, loop = 1) {
  value = { ...value.toString() };

  let total = 0;
  for (let key in value) {
    total += Number(value[key]);
  }

  if (total < 10) {
    if (total % 3 == 0) {
      console.log(loop);
      console.log("YES");
      return 0;
    } else {
      console.log(loop);
      console.log("NO");
      return 0;
    }
  }

  return divi(total, loop + 1);
}
divi(V);
