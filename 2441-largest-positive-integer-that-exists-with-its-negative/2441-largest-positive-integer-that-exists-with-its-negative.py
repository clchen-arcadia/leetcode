class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        max_valid = None
        set_neg = set()
        set_pos = set()

        for num in nums:
            if num > 0:
                if -num in set_neg:
                    max_valid = num if max_valid is None or num > max_valid else max_valid
                set_pos.add(num)
            elif num < 0:
                if -num in set_pos:
                    max_valid = -num if max_valid is None or -num > max_valid else max_valid
                set_neg.add(num)
            else:
                continue

        return max_valid if max_valid is not None else -1
