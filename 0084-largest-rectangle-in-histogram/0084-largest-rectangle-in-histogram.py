class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        left_bounds = [0] * len(heights)
        right_bounds = [len(heights) - 1] * len(heights)

        for i in range(1, len(heights)):
            curr_height = heights[i]
            search = i
            while search > 0 and heights[search - 1] >= curr_height:
                search = left_bounds[search - 1]
            left_bounds[i] = search

        for i in range(len(heights) - 2, -1, -1):
            curr_height = heights[i]
            search = i
            while search < len(heights) - 1 and heights[search + 1] >= curr_height:
                search = right_bounds[search + 1]
            right_bounds[i] = search

        # print("left_bounds=", left_bounds)
        # print("right_bounds=", right_bounds)

        max_area = 0
        for i in range(len(heights)):
            max_area = max(
                max_area,
                (right_bounds[i] - left_bounds[i] + 1) * heights[i]
            )

        return max_area