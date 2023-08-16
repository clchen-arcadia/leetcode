# Hard
from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:

        dq = deque() # idx of elements
        res = []

        for i in range(k): # first window
            while dq and nums[i] >= nums[dq[-1]]:
                dq.pop()
            dq.append(i)

        res.append(nums[dq[0]])

        for i in range(1, len(nums) - k + 1):
            if dq[0] < i:
                dq.popleft()
            new_idx = i + k - 1
            while dq and nums[new_idx] >= nums[dq[-1]]:
                dq.pop()
            dq.append(new_idx)
            res.append(nums[dq[0]])

        return res
