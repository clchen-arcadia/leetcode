/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length + 1; i++) {
    const currHeight = i === heights.length ? 0 : heights[i];

    while (stack.length !== 0 && currHeight < heights[stack[stack.length - 1]]) {
      const top = stack.pop();

      const height = heights[top];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

      const currArea = height * width;
      maxArea = Math.max(currArea, maxArea);
    }

    stack.push(i);
  }

  return maxArea;
};