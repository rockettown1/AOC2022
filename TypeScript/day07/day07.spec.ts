import part1 from "./part1";
import part2 from "./part2";

const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

describe("day07", () => {
  describe("Part 1", () => {
    it("should return 95437", () => {
      expect(part1(testInput)).toEqual(95437);
    });
  });
  describe("Part 2", () => {
    it("should return 24933642", () => {
      expect(part2(testInput)).toEqual(24933642);
    });
  });
});
