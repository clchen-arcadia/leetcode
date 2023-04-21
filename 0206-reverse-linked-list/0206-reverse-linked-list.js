/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  if (head === null || head.next === null) return head;

  const prev = null;
  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = prev;

  return newHead;
};
