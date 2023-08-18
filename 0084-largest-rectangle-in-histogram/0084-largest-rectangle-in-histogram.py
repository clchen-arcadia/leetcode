class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        max_area = 0
        stack = [] # like (idx, height)

        for curr_idx, curr_height in enumerate(heights):
            start = curr_idx

            while stack and stack[-1][1] > curr_height:
                # curr_idx is the right bound
                (stack_idx, stack_height) = stack.pop()

                max_area = max(
                    max_area,
                    (curr_idx - stack_idx) * stack_height
                )

                start = stack_idx

            stack.append((start, curr_height))

        while stack:
            # len(heights) is the right bound
            (stack_idx, stack_height) = stack.pop()

            max_area = max(
                max_area,
                (len(heights) - stack_idx) * stack_height
            )

        return max_area
