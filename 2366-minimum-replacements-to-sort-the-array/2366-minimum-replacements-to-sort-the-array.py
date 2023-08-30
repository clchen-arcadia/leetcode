class Solution:
    def minimumReplacement(self, nums: list[int]) -> int:
        count = 0
        last = nums[-1]

        for idx in range(len(nums) - 2, -1, -1):
            curr_num = nums[idx]

            if curr_num > last:
                div = curr_num // last
                if curr_num % last != 0:
                    div += 1
                count += div - 1
                last = curr_num // div
            else:
                last = curr_num


        return count
