import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day12");
import graph, { Graph } from "graphlib";

const testInput = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

/*
Started by implementing my own Graph class but then decided to just use an npm package
This package not only parses into a graph structure but also has an implementation of 
dijkstras algorithm
*/

// class Graph {
//   numOfNodes: number;
//   adjList: Map<string, { val: any; a: any; b: any }[]>;
//   constructor(numOfNodes: number) {
//     this.numOfNodes = numOfNodes;
//     this.adjList = new Map();
//   }

//   addNode(name: string, val: any) {
//     this.adjList.set(name, [val]);
//   }

//   addEdge(v: any, w: any) {
//     this.adjList.get(v)?.push(w);
//     this.adjList.get(w)?.push(v);
//   }

//   printGraph() {
//     let keys = this.adjList.keys();
//     for (const key of keys) {
//       let values = this.adjList.get(key);
//       let c = "";

//       for (let value of values!) {
//         c += value + " ";

//         console.log(`${key} --> ${c}`);
//       }
//     }
//   }
// }

export default function part1(input: string) {
  let matrix = input.split("\n").map((line) => line.split(""));

  const { g, startNode, endNode } = buildGraph(matrix);
  console.log(graph.alg.dijkstra(g, startNode)[endNode].distance);
}

part1(input);

function setNeighbours(a: number, b: number, matrix: string[][]) {
  let line = [];

  if (matrix[b][a + 1]) {
    line.push({ val: matrix[b][a + 1], a: a + 1, b: b });
  }

  if (matrix[b][a - 1]) {
    line.push({ val: matrix[b][a - 1], a: a - 1, b: b });
  }

  if (matrix[b - 1]?.[a]) {
    line.push({ val: matrix[b - 1][a], a: a, b: b - 1 });
  }

  if (matrix[b + 1]?.[a]) {
    line.push({ val: matrix[b + 1][a], a: a, b: b + 1 });
  }

  return line;
}

function parseElevation(item: string) {
  if (item === "S") return 1;
  if (item === "E") return 26;
  return item.charCodeAt(0) - 96;
}

function buildGraph(matrix: string[][]) {
  const g = new Graph();

  let startNode = "";
  let endNode = "";

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const neighbours = setNeighbours(j, i, matrix);
      const currentElevation = parseElevation(matrix[i][j]);
      const node = `${i}:${j}`;

      if (matrix[i][j] === "S") {
        startNode = node;
      }
      if (matrix[i][j] === "E") {
        endNode = node;
      }

      g.setNode(node, matrix[i][j]);

      for (const neighbour of neighbours) {
        const neighbourElevation = parseElevation(neighbour?.val!);
        if (neighbourElevation <= currentElevation + 1) {
          g.setNode(`${neighbour?.b}:${neighbour?.a}`, node);

          g.setEdge(node, `${neighbour?.b}:${neighbour?.a}`);
        }
      }
    }
  }
  return { g, startNode, endNode };
}
