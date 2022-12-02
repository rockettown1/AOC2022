import part1 from "./part1";
import part2 from "./part2";

const testInput1 = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const testInput2 = `10
20
30

4

50
600

10`;

describe("Day 1", () => {
  describe("Part 1", () => {
    it("should return 24000", () => {
      expect(part1(testInput1)).toEqual(24000);
    });
  });
  describe("Day 2", () => {
    it("should return 45000", () => {
      expect(part2(testInput1)).toEqual(45000);
    });

    it("should return 720", () => {
      expect(part2(testInput2)).toEqual(720);
    });
  });
});
