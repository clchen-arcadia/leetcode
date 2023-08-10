class Solution:
    def search(self, nums: list[int], target: int) -> bool:
        l, r = 0, len(nums) - 1

        while l <= r:
            idx = (l + r) // 2
            curr = nums[idx]

            if curr == target:
                return True

            if curr > nums[l]:  # you are in the non-switched half
                if curr < target:
                    l = idx + 1
                else:  # curr > target
                    # must compare target with nums[l]
                    if target >= nums[l]:
                        r = idx - 1
                    else:  # target < nums[l]
                        # target must be in the switched half, to the right
                        l = idx + 1
            elif curr < nums[l]:  # you are in the switched half
                if curr < target:
                    # must compare target with nums[l]
                    if target >= nums[l]:
                        # target must be in the non-switched half, to the left
                        r = idx - 1
                    else:  # target < nums[l]
                        l = idx + 1
                else:  # curr > target
                    r = idx - 1
            else:  # curr == nums[l]
                # could be in switched half or non-switched half
                # ambiguous
                if nums[r] == target:
                    return True
                l += 1
                r -= 1

        return False

