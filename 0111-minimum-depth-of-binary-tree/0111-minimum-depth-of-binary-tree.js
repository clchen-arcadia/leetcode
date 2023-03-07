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
 * @return {number}
 */
var minDepth = function(root) {

  if (!root) return 0;

  const queue = [];

  queue.push(root);

  let currLevel = 0;

  while (queue.length > 0) {

    const numNodesOnLevel = queue.length;

    currLevel++;
    for (let i=0; i<numNodesOnLevel; i++) {

      let currNode = queue.shift();

      if(!currNode.left && !currNode.right) return currLevel;

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }


  }

};
