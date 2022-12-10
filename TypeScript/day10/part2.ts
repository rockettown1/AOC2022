import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day10");
import { testInput } from ".";

export default async function part2(input: string) {
  let commands = input.split("\n").map((line) => {
    const instruction = line.split(" ");
    return { command: instruction[0], val: Number(instruction[1] || null) };
  });

  let CRT: string[][] = new Array(6)
    .fill(0)
    .map((_) => new Array(40).fill("  "));

  let X = 1;
  let cycles = 0;
  let signalStrength = [];
  let cycleCheck = 20;

  let crtCol = 0;
  for (const c of commands) {
    let cycleCount = c.command === `addx` ? 2 : 1;

    for (let i = 0; i < cycleCount; i++) {
      let crtRow = getRow(cycles);
      crtCol = cycles % 40 === 0 ? 0 : crtCol;
      if (crtCol === X || crtCol === X - 1 || crtCol === X + 1) {
        CRT[crtRow][crtCol] = "🎅";
      }
      crtCol++;
      cycles++;

      if (cycles === cycleCheck) {
        signalStrength.push(cycles * X);
        cycleCheck += 40;
      }

      if (i == cycleCount - 1) {
        X += c.val;
      }
    }
  }

  //just for drawing/animating santa letters, not really important - could just use console.table(CRT)
  let strArr: string[] = [];
  for (const row of CRT) {
    strArr.push(row.join(""));
    console.clear();
    console.log(strArr);
    await sleep(100);
    console.clear();
  }
  console.log(strArr);
}

function getRow(cycles: number) {
  return Math.floor(cycles / 40);
}

//just used for drawing
function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
