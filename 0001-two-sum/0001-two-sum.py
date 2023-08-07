class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        val_to_idx = {}

        for idx, num in enumerate(nums):
            val_to_idx[num] = idx

        for idx, num in enumerate(nums):
            comp_idx = val_to_idx.get(target - num)
            if comp_idx is not None and idx != comp_idx:
                return [idx, comp_idx]
