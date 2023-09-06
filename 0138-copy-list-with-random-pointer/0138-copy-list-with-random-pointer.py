"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':

        if head is None:
            return None

        new_head = Node(head.val)
        prev_node = new_head

        curr = head.next

        while curr:
            new_node = Node(curr.val)
            prev_node.next = new_node
            prev_node = new_node
            curr = curr.next

        curr = head
        curr_new = new_head

        while curr:
            if curr.random is None:
                curr = curr.next
                curr_new = curr_new.next
                continue

            random_node = curr.random

            scan_curr = head
            new_scan_curr = new_head

            while scan_curr:
                if scan_curr == random_node:
                    curr_new.random = new_scan_curr
                    break

                scan_curr = scan_curr.next
                new_scan_curr = new_scan_curr.next

            curr = curr.next
            curr_new = curr_new.next

        return new_head
