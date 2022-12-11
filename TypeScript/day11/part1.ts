import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day11");
import { testInput, monkeyFactory, IMonkey } from ".";

/*
Basic strategy: 
Parse the info for each monkey into objects with a factory function.
After all the rounds are finished, loop over the inspecttionData collection and sum the top two.
This solution uses a Monkey class to encapsulate the throwTo logic
*/

export default function part1(input: string) {
  let monkeys = input.split("\n\n");
  let monkeyData: IMonkey[] = [];
  let roundsLeft = 20;
  let inspectionData = [];

  for (let i = 0; i < monkeys.length; i++) {
    monkeyData = [...monkeyData, monkeyFactory(monkeys[i])];
  }

  while (roundsLeft > 0) {
    for (let i = 0; i < monkeyData.length; i++) {
      monkeyData[i].throwTo(monkeyData);
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

part1(input);
