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
 * @return {number[][]}
 */
var levelOrder = function(root) {

  if(!root) return [];

  const queue = [];
  const levelOrderArray = [];

  queue.push(root);

  while (queue.length > 0) {

    const numNodesOnLevel = queue.length;
    const sublevelOrderArray = [];

    for (let i=0; i<numNodesOnLevel; i++) {
      let currNode = queue.shift();

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      sublevelOrderArray.push(currNode.val);
    }

    levelOrderArray.push(sublevelOrderArray);

  }

  return levelOrderArray;

};
