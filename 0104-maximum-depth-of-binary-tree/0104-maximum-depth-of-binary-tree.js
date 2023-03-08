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

    function _recurseHelp(nodeOrNull, depth) {
      if(nodeOrNull === null) return 0;
      if(!nodeOrNull.left && !nodeOrNull.right) return depth;

      return Math.max(
        _recurseHelp(nodeOrNull.left, depth + 1),
        _recurseHelp(nodeOrNull.right, depth + 1),
      );
    }

    function _recurseNoParam(node) {
      if (node === null) return 0;

      return 1 + Math.max(_recurseNoParam(node.left), _recurseNoParam(node.right));
    }

    // return _recurseMaxDepth(root, 1);
    // return _recurseHelp(root, 1);
    return _recurseNoParam(root);
};
