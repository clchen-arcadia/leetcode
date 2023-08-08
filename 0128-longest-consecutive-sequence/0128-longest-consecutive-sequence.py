class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        set_nums = set(nums)
        longest = 0

        for num in nums:
            if (num - 1) in set_nums:
                continue
            length = 1
            while (num + length) in set_nums:
                length += 1
            longest = max(longest, length)

        return longest
