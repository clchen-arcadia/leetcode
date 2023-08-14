import heapq
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        h = []
        for num in nums:
            heapq.heappush(h, -num)
        for _ in range(1, k):
            heapq.heappop(h)
        return -heapq.heappop(h)