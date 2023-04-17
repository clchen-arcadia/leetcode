/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (let token of tokens) {
    const parsedNum = Number(token);

    if (!Number.isNaN(parsedNum)) {
      stack.push(parsedNum);
    }
    else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      switch (token) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(Math.trunc(operand1 / operand2));
          break;
      }
    }
  }

  if (stack.length !== 1) throw new Error("invalid RPN");

  return stack[0];
};


console.log(evalRPN(["2","1","+","3","*"]), 'should be 9');
