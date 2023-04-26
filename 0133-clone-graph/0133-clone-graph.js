/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const newNodes = [];

  let seen = new Set();
  let stack = [node];

  while (stack.length !== 0) {
    const curr = stack.pop();
    const newNode = new Node(curr.val);

    seen.add(curr);
    newNodes.push(newNode);


    for (let neighbor of curr.neighbors) {
      if (!seen.has(neighbor)) {
        stack.push(neighbor);
        seen.add(neighbor);
      }
    }
  }

  seen = new Set();
  stack = [node];

  while (stack.length !== 0) {
    const curr = stack.pop();
    const currVal = curr.val;
    seen.add(curr);

    for (let neighbor of curr.neighbors) {
      if (!seen.has(neighbor)) {
        stack.push(neighbor);
        seen.add(neighbor);
      }
    }

    const neighborsVals = new Set(curr.neighbors.map(n => n.val));
    const newNodeAnalog = newNodes.find(n => n.val === currVal);
    newNodeAnalog.neighbors = newNodes.filter(n => neighborsVals.has(n.val));
  }


  return newNodes[0];
};
