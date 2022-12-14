import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day14");

const testInput = `
498,4 -> 498,6 -> 496,6
503,4 -> 502,4 -> 502,9 -> 494,9`;

export default function part2(input: string) {
  let maxY = 0;
  const lines = input
    .trim()
    .split("\n")
    .map((line) =>
      line.split(" -> ").map((point) => {
        const [x, y] = point.split(",").map((val) => Number(val));
        if (y > maxY) maxY = y;
        return { x, y };
      })
    );

  let grid = new Set();

  for (const line of lines) {
    let currentPoint = line.shift();

    while (line.length) {
      let targetPoint = line.shift();

      while (
        currentPoint?.x !== targetPoint?.x ||
        currentPoint?.y !== targetPoint?.y
      ) {
        grid.add(`${currentPoint!.x}:${currentPoint!.y}`);
        if (currentPoint?.x !== targetPoint?.x) {
          let diff =
            (targetPoint!.x - currentPoint!.x) /
            Math.abs(targetPoint!.x - currentPoint!.x);
          currentPoint!.x += diff;
        } else {
          let diff =
            (targetPoint!.y - currentPoint!.y) /
            Math.abs(targetPoint!.y - currentPoint!.y);
          currentPoint!.y += diff;
        }
      }

      grid.add(`${currentPoint!.x}:${currentPoint!.y}`);
    }
  }

  let amountOfSand = 0;

  while (true) {
    if (grid.has(`500:0`)) {
      break;
    }

    let currPoint = { x: 500, y: 0 };
    amountOfSand++;

    while (true) {
      if (currPoint.y === maxY + 1) {
        grid.add(`${currPoint.x}:${currPoint.y}`);
        break;
      } else if (!grid.has(`${currPoint.x}:${currPoint.y + 1}`)) {
        currPoint.y++;
      } else if (!grid.has(`${currPoint.x - 1}:${currPoint.y + 1}`)) {
        currPoint.y++;
        currPoint.x--;
      } else if (!grid.has(`${currPoint.x + 1}:${currPoint.y + 1}`)) {
        currPoint.y++;
        currPoint.x++;
      } else {
        grid.add(`${currPoint.x}:${currPoint.y}`);
        break;
      }
    }
  }
  console.log(amountOfSand);
}
