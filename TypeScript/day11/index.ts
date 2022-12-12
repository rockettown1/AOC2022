export const testInput = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

export interface IMonkey {
  queue: number[];
  divider: number;
  options: { true: number; false: number };
  itemsInspected: number;
  operands: string;
  setDivider: Function;
  setOperands: Function;
  setQueue: Function;
  setOptions: Function;
  throwTo: Function;
}

class Monkey implements IMonkey {
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

  private operation(old: number, operands: string): number {
    let replaced = operands.replaceAll("old", `${old}`);
    return Math.floor(operatorParser(replaced)! / 3);
  }

  public throwTo(monkeys: Monkey[]): void {
    while (this.queue.length > 0) {
      this.itemsInspected++;
      let num = this.queue.shift();
      if (this.operation(num!, this.operands) % this.divider === 0) {
        console.log(`Throwing to monkey ${this.options.true}`);
        monkeys[this.options.true].queue.push(
          this.operation(num!, this.operands)
        );
      } else {
        console.log(`Throwing to monkey ${this.options.false}`);
        monkeys[this.options.false].queue.push(
          this.operation(num!, this.operands)
        );
      }
    }
  }
}

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

export function operatorParser(input: string) {
  const arr = input.split(" ");

  switch (arr[1]) {
    case "*":
      return parseInt(arr[0]) * parseInt(arr[2]);
    case "+":
      return parseInt(arr[0]) + parseInt(arr[2]);
  }
}
