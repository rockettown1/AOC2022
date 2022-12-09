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

type Point = { x: number; y: number };

export default function part2(input: string) {
  const moves = input.split("\n").map((line) => {
    const [direction, moves] = line.split(" ");
    return {
      direction,
      moves: Number(moves),
    };
  });
  let head: Point = { x: 0, y: 0 };
  let tail: Point = { x: 0, y: 0 };
  let visitedPoints = new Set<string>();
  hasVisited(0, 0, visitedPoints);
  let newHead: Point = head;
  let newTail: Point = tail;

  //   console.table(moves);
  //   console.table(head);
  //   console.table(tail);

  const rules = {
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 },
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 },
  };

  for (const line of moves) {
    for (let i = 0; i < line.moves; i++) {
      newHead = move(line.direction, head, rules);
      newTail = trailHead(newHead, newTail);
      hasVisited(newTail.x, newTail.y, visitedPoints);
    }
  }

  return visitedPoints.size;
}

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

function trailHead(head: Point, tail: Point) {
  //need the Manhattan distance
  const distance = Math.max(
    Math.abs(tail.x - head.x),
    Math.abs(tail.y - head.y)
  );
  if (distance > 1) {
    const dirX = head.x - tail.x;
    const dirY = head.y - tail.y;

    tail.x += Math.abs(dirX) === 2 ? dirX / 2 : dirX;
    tail.y += Math.abs(dirY) === 2 ? dirY / 2 : dirY;
  }

  return tail;
}
