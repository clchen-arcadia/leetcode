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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let stackCandidates = [];
    let stack = [root];
    
    
    while (stack.length !== 0) {
        let curr = stack.pop();
        
        if (curr.val === subRoot.val) stackCandidates.push(curr);
        
        if (curr.left !== null) stack.push(curr.left);
        if (curr.right !== null) stack.push(curr.right);
    }
    
    
    while (stackCandidates.length !== 0) {
        let templateRead = stackCandidates.pop();
        let subtreeRead = subRoot;
        
        let subStack = [[templateRead, subtreeRead]];
        
        let isWin = true;
        
        while (subStack.length !== 0) {
            currTuple = subStack.pop();
            let template = currTuple[0];
            let test = currTuple[1];
            
            if (template.left?.val !== test.left?.val) {
                isWin = false;
                break;
            }
            if (template.right?.val !== test.right?.val) {
                isWin = false;
                break;
            }
            
            if (template.left !== null) {
                subStack.push([
                    template.left,
                    test.left
                ]);
            }
            if (template.right !== null) {
                subStack.push([
                    template.right,
                    test.right
                ]);
            }
        }
        
        if (isWin) return true;
    }
    
    return false;
};