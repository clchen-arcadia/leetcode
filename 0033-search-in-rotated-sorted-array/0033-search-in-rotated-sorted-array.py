class Solution:
    def search(self, nums: list[int], target: int) -> int:
        if not nums:
            return -1

        l, r = 0, len(nums) - 1

        while l <= r:
            idx = (l + r) // 2
            curr = nums[idx]

            if curr == target:
                return idx

            if curr < nums[l]:
                # in the rotated half, to the right
                if curr < target:
                    if target < nums[l]:
                        l = idx + 1
                    else: # target >= nums[l]
                        r = idx - 1
                else: # curr > target
                    r = idx - 1

            else: # curr > nums[l]
                # in non-rotated half, to the left
                if curr < target:
                    l = idx + 1
                else: # curr > target
                    if target >= nums[l]:
                        r = idx - 1
                    else: # target < nums[l]
                        l = idx + 1

        return -1
