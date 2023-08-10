class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        output = [0] * len(temperatures)
        stack = []

        for curr_idx, curr_temp in reversed(list(enumerate(temperatures))):
            while stack:
                (idx, temp) = stack[-1]
                if temp > curr_temp:
                    output[curr_idx] = idx - curr_idx
                    break
                stack.pop()
            stack.append((curr_idx, curr_temp))

        return output
