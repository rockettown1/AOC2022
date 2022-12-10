import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day07");

/* Disclaimer: This is a refactored solution after submitting and looking at othe (better) solutions. Mainly stuff to do with regex magic which I don't really understand 🤷‍♂️ */

type Node = {
  name: string;
  isDirectory: boolean;
  children?: Node[];
  parent?: Node;
  size?: number;
};

function createTree(lines: string[]) {
  const tree: Node = {
    name: "/",
    isDirectory: true,
    children: [],
  };

  let currentNode: Node | undefined = tree;
  let currentCommand = null;

  for (const line of lines) {
    if (line[0] === "$") {
      // command
      const match = /^\$ (?<command>\w+)(?: (?<arg>.+))?$/.exec(line);

      currentCommand = match!.groups?.command;

      if (currentCommand === "cd") {
        const target = match!.groups?.arg;
        switch (target) {
          case "/":
            currentNode = tree;
            break;
          case "..":
            currentNode = currentNode!.parent!;
            break;
          default:
            currentNode = currentNode!.children?.find(
              (folder) => folder.isDirectory && folder.name === target
            );
        }
      }
    } else {
      if (currentCommand === "ls") {
        // For now, it's a file/directory from a 'ls' command
        const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line);
        if (fileMatch) {
          const node = {
            name: fileMatch.groups!.name,
            size: parseInt(fileMatch.groups!.size),
            isDirectory: false,
            parent: currentNode,
          };
          currentNode!.children?.push(node);
        }
        const dirMatch = /^dir (?<name>.+)$/.exec(line);
        if (dirMatch) {
          const node = {
            name: dirMatch.groups!.name,
            isDirectory: true,
            children: [],
            parent: currentNode,
          };
          currentNode!.children?.push(node);
        }
      }
    }
  }

  return tree;
}

function getSize(
  node: Node,
  directoryCallback = (name: string, dirSize: number | undefined) => {}
): number | undefined {
  if (!node.isDirectory) {
    return node.size;
  }
  const directorySize = node
    .children!.map((child) => getSize(child, directoryCallback))
    .reduce((a, b) => a! + b!, 0);

  directoryCallback(node.name, directorySize);

  return directorySize;
}

export default function part1(input: string) {
  const lines = input.trim().split("\n");

  const thresholdSize = 100000;
  const tree = createTree(lines);

  let sum = 0;

  getSize(tree, (name, size) => {
    if (size! < thresholdSize) {
      sum += size!;
    }
  });

  return sum;
}

part1(input);
