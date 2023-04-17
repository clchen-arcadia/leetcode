/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
    if (heights.length < 3) return 0;
    
    let [maxLeft, maxRight] = [heights[0], heights[heights.length - 1]];
    let [left, right] = [1, heights.length - 2];
    
    let totalRain = 0;
    
    while (left <= right) {
        if (maxLeft < maxRight) {
            if (heights[left] > maxLeft) maxLeft = heights[left];
            else totalRain += maxLeft - heights[left];
            left++;
        } else {
            if (heights[right] > maxRight) maxRight = heights[right];
            else totalRain += maxRight - heights[right];
            right--;
        }
    }
    
    return totalRain;
};