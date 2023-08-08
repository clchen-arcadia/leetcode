class Solution:
    def trap(self, heights: list[int]) -> int:
        total_rain = 0
        left, right = 0, len(heights) - 1

        while left < right:
            l_height = heights[left]
            r_height = heights[right]

            if l_height < r_height:
                if l_height < heights[left + 1]:
                    left += 1
                else:
                    while left < right and not l_height < heights[left + 1]:
                        left += 1
                        total_rain += l_height - heights[left]
            else:
                if r_height < heights[right - 1]:
                    right -= 1
                else:
                    while left < right and not r_height < heights[right - 1]:
                        right -= 1
                        total_rain += r_height - heights[right]

        return total_rain