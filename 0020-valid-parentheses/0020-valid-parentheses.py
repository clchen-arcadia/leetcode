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
                if len(stack) == 0 or stack[-1] != parens_map[c]:
                    return False
                stack.pop()

        return len(stack) == 0