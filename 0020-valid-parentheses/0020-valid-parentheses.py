class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        opened = set(['(', '{', '['])
        closed = set([')', '}', ']'])
        parens_map = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        for c in s:
            if c in opened:
                stack.append(c)
            if c in closed:
                if len(stack) == 0:
                    return False
                top = stack.pop()
                if parens_map[c] != top:
                    return False

        return len(stack) == 0
