/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {

  const queue = [];
  const averagesOfLevels = [];

  queue.push(root);

  while (queue.length > 0) {

    const numNodesOnLevel = queue.length;
    let runningTotal = 0;
    // let runningCount = 0;

    for (let i=0; i<numNodesOnLevel; i++) {
      let currNode = queue.shift();

      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);

      runningTotal += currNode.val;
      // runningCount++;
    }

    averagesOfLevels.push(runningTotal / numNodesOnLevel);
  }

  return averagesOfLevels;
};
