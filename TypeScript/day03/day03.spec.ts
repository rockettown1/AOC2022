import part1 from "./part1";
import part2 from "./part2";

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const testPart2a = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg`;

const testPart2b = `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const testPart2c = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe("Day 3", () => {
  describe("Part 1", () => {
    it("should return 157", () => {
      expect(part1(testInput)).toEqual(157);
    });
  });
  describe("Part 2", () => {
    it("should return 18", () => {
      expect(part2(testPart2a)).toEqual(18);
    });
    it("should return 52", () => {
      expect(part2(testPart2b)).toEqual(52);
    });
    it("should return 70", () => {
      expect(part2(testPart2c)).toEqual(70);
    });
  });
});
