/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (let char of s) {
        if (['(', '[', '{'].includes(char)){
            stack.push(char);
        }
        if (char === ')') {
            if (stack[stack.length - 1] === '(') stack.pop();
            else return false;
        }
        if (char === ']') {
            if (stack[stack.length - 1] === '[') stack.pop();
            else return false;
        }
        if (char === '}') {
            if (stack[stack.length - 1] === '{') stack.pop();
            else return false;
        }
    }
    
    if (stack.length === 0) return true;
    else return false;
};
