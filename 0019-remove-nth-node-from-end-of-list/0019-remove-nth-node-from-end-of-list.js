/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    
    const idxToRemove = len - n;
    if (idxToRemove === 0) return head.next;
    
    let idx = 0;
    curr = head;
    let prev = null;
    
    while (curr) {
        
        if (idx === idxToRemove) {
            prev.next = curr.next;
            return head;
        }
        
        prev = curr;
        idx++;
        curr = curr.next;
    }
        
    return head;
};