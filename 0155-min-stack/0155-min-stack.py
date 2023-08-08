class MinStack:

    def __init__(self):
        self.stack = []
        self.min = None

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.min is None or self.min > val:
            self.min = val

    def pop(self) -> None:
        removed = self.stack.pop()
        if removed == self.min:
            if len(self.stack) == 0:
                self.min = None
            else:
                self.min = min(self.stack)

    def top(self) -> int:
        if not self.stack:
            return None
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
