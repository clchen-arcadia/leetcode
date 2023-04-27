/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const pStack = [p];
    const qStack = [q];
    
    while (pStack.length !== 0 && qStack.length !== 0) {
        if (pStack.length !== qStack.length) return false;
        
        const currP = pStack.pop();
        const currQ = qStack.pop();
        
        if (currP?.val !== currQ?.val) return false;
        
        if (currP?.left !== undefined) pStack.push(currP.left);
        if (currP?.right !== undefined) pStack.push(currP.right);
        if (currQ?.left !== undefined) qStack.push(currQ.left);
        if (currQ?.right !== undefined) qStack.push(currQ.right);
    }
    
    return true;
};