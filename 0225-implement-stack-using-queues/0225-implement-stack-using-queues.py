from collections import deque

class MyStack:

    def __init__(self):
        self.q1 = deque()

    def push(self, x: int) -> None:
        new_queue = deque()
        new_queue.append(x)

        while self.q1:
            new_queue.append(self.q1.popleft())

        self.q1 = new_queue

    def pop(self) -> int:
        return self.q1.popleft()

    def top(self) -> int:
        return self.q1[0]

    def empty(self) -> bool:
        return len(self.q1) == 0