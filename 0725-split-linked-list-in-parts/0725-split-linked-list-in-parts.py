# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        length = 0

        if head is not None:
            curr = head
            while curr:
                length += 1
                curr = curr.next

        parts = []
        curr = head

        for part in range(k):
            count = length // k + (1 if part < length % k else 0)

            if count == 0:
                parts.append(None)
                continue

            subpart_head = curr
            prev = curr

            for _ in range(count):
                prev = curr
                curr = curr.next

            prev.next = None
            parts.append(subpart_head)

        return parts
