class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        triplets_set = set()

        i = 0
        while not nums[i] > 0 and i < len(nums) - 2:
            j, k = i + 1, len(nums) - 1
            while j < k:
                sum = nums[i] + nums[j] + nums[k]
                if sum < 0:
                    j += 1
                elif sum > 0:
                    k -= 1
                else:
                    triplets_set.add((nums[i], nums[j], nums[k]))
                    j += 1
                    k -= 1
            i += 1

        return [list(t) for t in triplets_set]