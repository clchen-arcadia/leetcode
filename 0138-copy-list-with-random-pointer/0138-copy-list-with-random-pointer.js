/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

  if (head === null) return null;

  const newHead = new Node(head.val, null, null);
  newHead.ref = head;

  // const linkedListNodes = [newHead];

  let curr = head.next;
  let prev = newHead;

  while (curr) {
    const newNode = new Node(curr.val, null, null);
    newNode.ref = curr;

    prev.next = newNode;

    prev = newNode;

    // linkedListNodes.push(newNode);

    curr = curr.next;

  }

  curr = newHead;
  readCurr = head;

  while (readCurr) {
    const randomNode = readCurr.random;

    if (randomNode === null) curr.random = null;
    else {
      let iCurr = newHead;
      while(iCurr) {
        if (iCurr.ref === randomNode) {
          curr.random = iCurr;
          break;
        }
        iCurr = iCurr.next;
      }
    }

    curr = curr.next;
    readCurr = readCurr.next;
  }

  return newHead;
};
