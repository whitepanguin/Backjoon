const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "10_기하1/input.txt";

const input = fs.readFileSync(file).toString().trim().split(/\r?\n/);

// console.log(input);

let fircor = input[0].split(" ").map(Number);
let seccor = input[1].split(" ").map(Number);
let thircor = input[2].split(" ").map(Number);

if (fircor[0] - seccor[0] > 0) {
  // 오른쪽에 있는
  if (fircor[1] - seccor[1] > 0) {
    // 위에 있는
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${fircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${seccor[1]}`);
    }
  } else if (fircor[1] == seccor[1]) {
    // 같은 위치
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${thircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${thircor[1]}`);
    }
  } else {
    // 아래에 있는
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${fircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${seccor[1]}`);
    }
  }
} else if (fircor[0] == seccor[0]) {
  if (fircor[1] == thircor[1]) {
    console.log(`${thircor[0]} ${seccor[1]}`);
  } else {
    console.log(`${thircor[0]} ${fircor[1]}`);
  }
} else {
  // 왼쪽에 있는
  if (fircor[1] - seccor[1] > 0) {
    // 위에 있는
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${thircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${seccor[1]}`);
    }
  } else if (fircor[1] == seccor[1]) {
    // 같은 위치
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${thircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${thircor[1]}`);
    }
  } else {
    // 아래에 있는
    if (fircor[0] == thircor[0]) {
      console.log(`${seccor[0]} ${fircor[1]}`);
    } else {
      console.log(`${fircor[0]} ${seccor[1]}`);
    }
  }
}

// 가장 간결

// 0 = /dev/stdin (Linux · Baekjoon 채점), 로컬 테스트는 파일 경로 지정
// const [x1, y1, x2, y2, x3, y3] =
//   require("fs").readFileSync(process.platform === "linux" ? 0 : "10_기하1/input.txt", "utf8")
//                .trim().split(/\s+/).map(Number);

// console.log(`${x1 ^ x2 ^ x3} ${y1 ^ y2 ^ y3}`);

//-----------------

// 가장 빠른 연산

// const fs = require("fs");
// const file = process.platform === "linux" ? 0 : "10_기하1/input.txt";

// const pts = fs.readFileSync(file, "utf8")
//               .trim().split(/\r?\n/)
//               .map(line => line.split(" ").map(Number)); // [[x1,y1],[x2,y2],[x3,y3]]

// const xs = pts.map(p => p[0]);
// const ys = pts.map(p => p[1]);

// const missingX = xs[0] === xs[1] ? xs[2] : xs[0] === xs[2] ? xs[1] : xs[0];
// const missingY = ys[0] === ys[1] ? ys[2] : ys[0] === ys[2] ? ys[1] : ys[0];

// console.log(`${missingX} ${missingY}`);
