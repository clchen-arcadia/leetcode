/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root;
};

function merge(list1, list2) {
  const dummy = {};
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
      curr = curr.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
      curr = curr.next;
    }
  }

  curr.next = (list1 === null) ? list2 : list1;

  return dummy.next;
}
