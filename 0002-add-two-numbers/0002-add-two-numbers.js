/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let readHead1 = l1;
  let readHead2 = l2;

  let newHead = null;
  let isCarryOne = false;
  let prev = null;

  while (readHead1 || readHead2) {

    const isOnlyOne = readHead1 === null || readHead2 === null;
    const theOne = readHead1 === null ? readHead2 : readHead1;

    let tempSum = isOnlyOne ? theOne.val : readHead1.val + readHead2.val;
    let tempIsCarryOne = false;

    if (isCarryOne) {
      tempSum += 1;
    }

    if (tempSum >= 10) {
      tempSum = tempSum % 10;
      tempIsCarryOne = true;
    }

    isCarryOne = tempIsCarryOne;

    const newNode = new ListNode(tempSum);

    if (newHead === null) newHead = newNode;
    if (prev !== null) prev.next = newNode;
    prev = newNode;

    if (readHead1 !== null) readHead1 = readHead1.next;
    if (readHead2 !== null) readHead2 = readHead2.next;
  }

  if (isCarryOne) {
    prev.next = new ListNode(1);
  }

  return newHead;

};
