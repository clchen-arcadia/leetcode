class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        stack = []
        output = []

        def helper_recurse(t):
            (opened, closed) = t
            if opened == 0 and closed == 0:
                output.append(''.join(stack))
                return
            if opened:
                stack.append('(')
                opened -= 1
                closed += 1
                helper_recurse((opened, closed))
                stack.pop()
                opened += 1
                closed -= 1
            if closed:
                stack.append(')')
                closed -= 1
                helper_recurse((opened, closed))
                stack.pop()
                closed += 1

        helper_recurse((n, 0))

        return output
