/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let maxArea = 0;
    
    let [left, right] = [0, heights.length - 1];
    
    while (left < right) {
        tempArea = (right - left) * Math.min(heights[left], heights[right]);
        if (tempArea > maxArea) maxArea = tempArea;
        
        if (heights[left] < heights[right]) {
            left++;
        } else if (heights[left] > heights[right]) {
            right--;
        } else {
            if (heights[left + 1] < heights[right - 1]) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return maxArea;
};