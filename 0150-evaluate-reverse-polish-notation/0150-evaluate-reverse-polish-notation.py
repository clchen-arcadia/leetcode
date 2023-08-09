class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        func_map = {
            '+' : self.add,
            '-' : self.subtract,
            '*' : self.multiply,
            '/' : self.divide,
        }

        def eval_recurse(key):
            func = func_map[key]
            operand2 = tokens.pop()
            if operand2 in func_map:
                operand2 = eval_recurse(operand2)
            operand1 = tokens.pop()
            if operand1 in func_map:
                operand1 = eval_recurse(operand1)
            return func(int(operand1), int(operand2))

        output = tokens.pop()
        if output in func_map:
            output = eval_recurse(output)
        else:
            output = int(output)

        return output

    def add(self, x: int, y: int) -> int:
        return x + y

    def subtract(self, x: int, y: int) -> int:
        return x - y

    def multiply(self, x: int, y: int) -> int:
        return x * y

    def divide(self, x: int, y: int) -> int:
        return int(x / y)
