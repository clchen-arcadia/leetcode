class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        stack = []

        for token in tokens:
            match token:
                case '+':
                    stack.append(stack.pop() + stack.pop())
                case '-':
                    op2, op1 = stack.pop(), stack.pop()
                    stack.append(op1 - op2)
                case '*':
                    stack.append(stack.pop() * stack.pop())
                case '/':
                    op2, op1 = stack.pop(), stack.pop()
                    stack.append(int(op1 / op2))
                case _:
                    stack.append(int(token))

        return stack[0]
