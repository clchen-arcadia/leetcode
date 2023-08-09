class Solution:
    def minimizeMax(self, nums: list[int], p: int) -> int:
        nums.sort()
        min_diff = 0
        max_diff = nums[len(nums) - 1] - nums[0]

        def can_form_pairs(diff, req):
            count = 0
            i = 0
            while i < len(nums) - 1 and count < req:
                if nums[i + 1] - nums[i] <= diff:
                    count += 1
                    i += 2
                else:
                    i += 1
            return count == req

        while min_diff < max_diff:
            search_diff = (max_diff + min_diff) // 2

            if can_form_pairs(search_diff, p):
                max_diff = search_diff
            else:
                min_diff = search_diff + 1

        return min_diff
