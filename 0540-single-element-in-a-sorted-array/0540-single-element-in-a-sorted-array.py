class Solution:
    def singleNonDuplicate(self, nums: list[int]) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            if (left == right):
                return nums[left]

            curr = (left + right) // 2
            curr = curr if curr % 2 == 0 else curr - 1

            neighbors = (
                nums[curr] == nums[curr - 1]
                if (0 <= curr - 1) else 0,
                nums[curr] == nums[curr + 1]
            )

            if neighbors == (0, 0):
                return nums[curr]
            if neighbors == (0, 1):
                # if (right - left + 1) == 3:
                #     return nums[curr - 1]
                left = curr + 2
            if neighbors == (1, 0):
                # if (right - left + 1) == 3:
                #     return nums[curr + 1]
                right = curr
