import part1 from "./part1";
import part2 from "./part2";

const testInput = `30373
25512
65332
33549
35390`;

describe("day08", () => {
  describe("Part 1", () => {
    it("should return 21", () => {
      expect(part1(testInput)).toEqual(21);
    });
  });
  describe("Part 2", () => {
    it("should return 8", () => {
      expect(part2(testInput)).toEqual(8);
    });
  });
});
