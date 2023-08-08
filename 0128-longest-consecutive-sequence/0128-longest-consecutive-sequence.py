class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        set_nums = set(nums)
        longest = 0

        for num in nums:
            if (num - 1) in set_nums:
                continue
            candidate = 0
            while num in set_nums:
                num += 1
                candidate += 1
            longest = max(longest, candidate)

        return longest
