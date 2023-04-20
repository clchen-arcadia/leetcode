/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  if (!list1 || !list2) {
    if (!list1 && !list2) return null;
    else if (list1) return list1;
    else return list2;
  }

  let [list1Head, list2Head] = [list1, list2];
  let curr = null;
  let newHead = null;

  if (list1Head.val <= list2Head.val) {
    curr = list1Head;
    newHead = list1Head;
    list1Head = list1Head.next;
  } else {
    curr = list2Head;
    newHead = list2Head;
    list2Head = list2Head.next;
  }

  while (list1Head && list2Head) {
    if (list1Head.val <= list2Head.val) {
      curr.next = list1Head;
      curr = curr.next;
      list1Head = list1Head.next;
    } else {
      curr.next = list2Head;
      curr = curr.next;
      list2Head = list2Head.next;
    }
  }

  if (list1Head === null) {
    curr.next = list2Head;
  } else {
    curr.next = list1Head;
  }

  return newHead;
};
