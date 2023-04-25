/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let len = 0;
    let curr = head;
    while(curr) {
      len++;
      curr = curr.next;
    }

    // console.log(`len is ${len}`);

    const stack = [];
    let idx = 0;
    curr = head;
    while (curr) {
      if (idx >= Math.floor(len / 2)){
        stack.push(curr);
      }
      idx++;
      curr = curr.next;
    }

    // console.log(`stack is...`);
    // for (let elem of stack) {
    //   console.log(`elem is ${elem.val} with next=${elem.next?.val}`);
    // }

    curr = head;
    const bottom = len % 2 === 1 ? 1 : 0;
    while (stack.length > bottom) {

      // console.log(`while loop executed with curr = ${curr.val}`);
      // console.log(`stack is...`);
      // for (let elem of stack) {
      //   console.log(`elem is ${elem.val} with next=${elem.next?.val}`);
      // }

      const temp = curr.next;
      const top = stack.pop();
      curr.next = top;

      if (stack.length === bottom) {
        if (len % 2 === 0) {
          top.next = null;
        } else {
          top.next = stack.pop();
          top.next.next = null;
        }
      }
      else top.next = temp;

      curr = temp;
    }

};
