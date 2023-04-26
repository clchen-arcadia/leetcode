/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const gridOfNodes = [];
  const ROWS = heights.length;
  const COLS = heights[0].length;

  for (let row = 0; row < ROWS; row++) {
    let nodes = [];
    for (let col = 0; col < COLS; col++) {
      nodes.push(new Node([row, col], heights[row][col]));
    }
    gridOfNodes.push(nodes);
  }

  const dimensions = [ROWS, COLS];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const currNode = gridOfNodes[row][col];
      const neighborsCoords = getLegalNeighbors([row, col], dimensions);

      for (let coord of neighborsCoords) {
        const neighborNode = gridOfNodes[coord[0]][coord[1]];

        if (neighborNode.height >= currNode.height) {
          currNode.neighbors.push(neighborNode);
        }
      }
    }
  }

  // instantiate with north nodes
  const pacificNodes = [...gridOfNodes[0]];

  // add west nodes
  for (let row of gridOfNodes) {
    pacificNodes.push(row[0]);
  }

  const pacificSet = new Set();
  while (pacificNodes.length !== 0) {
    const curr = pacificNodes.pop();
    if (pacificSet.has(curr)) continue;

    pacificSet.add(curr);
    for (let neighbor of curr.neighbors) {
      if (!pacificSet.has(neighbor)) {
        pacificNodes.push(neighbor);
      }
    }
  }

  // instantiate with south nodes
  const atlanticNodes = [...gridOfNodes[ROWS - 1]];

  // add east nodes
  for (let row of gridOfNodes) {
    atlanticNodes.push(row[COLS - 1]);
  }

  const atlanticSet = new Set();
  while (atlanticNodes.length !== 0) {
    const curr = atlanticNodes.pop();
    if (atlanticSet.has(curr)) continue;

    atlanticSet.add(curr);
    for (let neighbor of curr.neighbors) {
      if (!atlanticSet.has(neighbor)) {
        atlanticNodes.push(neighbor);
      }
    }
  }

  const nodesIntersect = [...pacificSet].filter(n => atlanticSet.has(n));

  return nodesIntersect.map(n => n.coord);
};

class Node {
  constructor(coord, height, neighbors) {
    this.coord = coord;
    this.height = height;
    this.neighbors = (neighbors === undefined) ? [] : neighbors;
  }
}

function getLegalNeighbors(coord, dimensions) {
  const neighbors = [
    [coord[0] - 1, coord[1]],
    [coord[0] + 1, coord[1]],
    [coord[0], coord[1] - 1],
    [coord[0], coord[1] + 1],
  ];

  return neighbors.filter(
    c => (
      c[0] >= 0
      && c[0] < dimensions[0]
      && c[1] >= 0
      && c[1] < dimensions[1]
    ));
}
