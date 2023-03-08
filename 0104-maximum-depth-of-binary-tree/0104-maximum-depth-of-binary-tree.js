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
var maxDepth = function(root) {

    function _recurseMaxDepth(node, depth) {
      if (node === null) return depth - 1;

      return Math.max(
        _recurseMaxDepth(node.left, depth + 1),
        _recurseMaxDepth(node.right, depth + 1)
      );
    }

    return _recurseMaxDepth(root, 1);
};
