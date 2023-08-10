class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        output = [0] * len(temperatures)
        stack = []

        for curr_idx, curr_temp in enumerate(temperatures):
            while stack and curr_temp > stack[-1][1]:
                (idx, _) = stack.pop()
                output[idx] = curr_idx - idx
            stack.append((curr_idx, curr_temp))

        return output
