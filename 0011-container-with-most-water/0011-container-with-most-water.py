class Solution:
    def maxArea(self, heights: list[int]) -> int:
        max_water = 0

        left, right = 0, len(heights) - 1

        while left < right:
            left_height = heights[left]
            right_height = heights[right]
            curr_water = (right - left) * min(left_height, right_height)
            max_water = max(max_water, curr_water)

            if left_height < right_height:
                left += 1
            else:
                right -= 1

        return max_water
