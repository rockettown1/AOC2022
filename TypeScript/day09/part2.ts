import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day09");

const testInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const testInput2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

type Point = { x: number; y: number };

export default function part2(input: string) {
  const moves = input.split("\n").map((line) => {
    const [direction, moves] = line.split(" ");
    return {
      direction,
      moves: Number(moves),
    };
  });

  let visitedPoints = new Set<string>();
  hasVisited(0, 0, visitedPoints);
  let rope = new Array(10).fill(0).map((_: Point) => ({ x: 0, y: 0 }));

  const rules = {
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 },
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 },
  };

  for (const line of moves) {
    for (let i = 0; i < line.moves; i++) {
      rope[0] = move(line.direction, rope[0], rules);

      for (let j = 1; j < rope.length; j++) {
        let point = rope[j];
        point = trail(point, rope[j - 1]);
      }

      const tail = rope[rope.length - 1];
      hasVisited(tail.x, tail.y, visitedPoints);
    }
  }

  return visitedPoints.size;
}

console.log(part2(input));

function move(
  direction: string,
  point: Point,
  rules: { [k: string]: { x: number; y: number } }
) {
  const difference = rules[direction];
  point.x += difference.x;
  point.y += difference.y;

  return point;
}

function hasVisited(x: number, y: number, visited: Set<string>) {
  visited.add(`${x} ${y}`);
}

function trail(point: Point, head: Point) {
  //need the Manhattan distance
  const distance = Math.max(
    Math.abs(point.x - head.x),
    Math.abs(point.y - head.y)
  );
  if (distance > 1) {
    const dirX = head.x - point.x;
    const dirY = head.y - point.y;

    point.x += Math.abs(dirX) === 2 ? dirX / 2 : dirX;
    point.y += Math.abs(dirY) === 2 ? dirY / 2 : dirY;
  }

  return point;
}
