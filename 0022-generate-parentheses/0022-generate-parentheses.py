class Solution:
    def generateParenthesis(self, n: int) -> list[str]:

        output = []

        def helper_recurse(opened, closed, s):
            if opened == 0 and closed == 0:
                output.append(s)
                return
            if opened:
                s += '('
                opened -= 1
                closed += 1
                helper_recurse(opened, closed, s)
                s = s[:-1]
                opened += 1
                closed -= 1
            if closed:
                s += ')'
                closed -= 1
                helper_recurse(opened, closed, s)
                s = s[:-1]
                closed += 1

        helper_recurse(n, 0, '')

        return output
