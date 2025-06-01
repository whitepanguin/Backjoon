const fs = require("fs");
const file =
  process.platform === "linux" ? "dev/stdin" : "8_일반 수학1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\s+/);

let num = Number(input[0]);
for (let i = 0; i < num; i++) {
  let coin = Number(input[i + 1]);
  let qur = 0;
  let din = 0;
  let nik = 0;
  qur = Math.floor(coin / 25);
  coin = coin % 25;
  din = Math.floor(coin / 10);
  coin = coin % 10;
  nik = Math.floor(coin / 5);
  coin = Math.floor(coin % 5);

  console.log(`${qur} ${din} ${nik} ${coin}`);
}

// -- 정규식이 잘못 됬다고 전체 오답 처리가 난 케이스
