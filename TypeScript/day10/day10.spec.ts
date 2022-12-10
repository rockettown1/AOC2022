import part1 from "./part1";
import part2 from "./part2";
import { testInput } from ".";

describe("day10", () => {
  describe("Part 1", () => {
    it("should return a signal strength of 13140", () => {
      expect(part1(testInput)).toEqual(13140);
    });
  });
});
