class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        output_nums = [1] * len(nums)

        left_running_prod, right_running_prod = 1, 1

        for i in range(len(nums)):
            output_nums[i] *= left_running_prod
            left_running_prod *= nums[i]

        for i in range(len(nums) - 1, -1, -1):
            output_nums[i] *= right_running_prod
            right_running_prod *= nums[i]

        return output_nums
