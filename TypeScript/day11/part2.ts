import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day11");
import { testInput, operatorParser } from ".";

//Same strategy as part1 but using the Chinese Remainder theorem to keep numbers small

class Monkey {
  queue: number[] = [];
  divider: number = 0;
  options: { true: number; false: number } = { true: 0, false: 0 };
  itemsInspected: number = 0;
  operands: string = "";

  setQueue(arr: number[]) {
    this.queue = arr;
  }

  setDivider(num: number) {
    this.divider = num;
  }

  setOperands(ops: string) {
    this.operands = ops;
  }

  setOptions(option: { [k: string]: number }) {
    if (option["true"]) {
      this.options.true = option.true;
    } else {
      this.options.false = option.false;
    }
  }

  private operation(old: number): number {
    let replaced = this.operands.replaceAll("old", `${old}`);
    return Math.floor(operatorParser(replaced)!);
  }

  public throwTo(monkeys: Monkey[], div: number): void {
    while (this.queue.length > 0) {
      this.itemsInspected++;
      let num = this.queue.shift();
      if (this.operation(num!) % this.divider === 0) {
        monkeys[this.options.true].queue.push(this.operation(num!) % div);
      } else {
        monkeys[this.options.false].queue.push(this.operation(num!) % div);
      }
    }
  }
}

export default function part2(input: string) {
  let monkeys = input.split("\n\n");
  let monkeyData: Monkey[] = [];
  let roundsLeft = 10000;
  let inspectionData: number[] = [];
  let divider = 1;

  for (let i = 0; i < monkeys.length; i++) {
    monkeyData = [...monkeyData, monkeyFactory(monkeys[i])];
    divider *= monkeyData[i].divider;
  }

  while (roundsLeft > 0) {
    for (let i = 0; i < monkeyData.length; i++) {
      monkeyData[i].throwTo(monkeyData, divider);
    }
    roundsLeft--;
  }

  for (const monkey of monkeyData) {
    inspectionData.push(monkey.itemsInspected);
  }

  console.log(
    inspectionData
      .sort((a, b) => b - a)
      .splice(0, 2)
      .reduce((a, b) => a * b)
  );
}

part2(input);

export function monkeyFactory(input: string) {
  let monkey = new Monkey();
  let lines = input
    .split("\n")
    .map((line) => line.split(":").map((part) => part.trim()));

  for (let i = 1; i < lines.length; i++) {
    switch (lines[i][0]) {
      case "Starting items":
        monkey.setQueue(lines[i][1].split(",").map((item) => parseInt(item)));
        break;
      case "Operation":
        monkey.setOperands(
          lines[i][1].split(" = ").map((item) => item.trim())[1]
        );
        break;
      case "Test":
        monkey.setDivider(parseInt(lines[i][1].split(" ")[2]));
        break;
      case "If true":
        monkey.setOptions({ true: parseInt(lines[i][1].split(" ")[3]) });
        break;
      case "If false":
        monkey.setOptions({ false: parseInt(lines[i][1].split(" ")[3]) });
    }
  }
  return monkey;
}
