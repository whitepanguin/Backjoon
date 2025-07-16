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
