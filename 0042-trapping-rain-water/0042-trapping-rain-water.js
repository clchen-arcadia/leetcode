/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
    if (heights.length < 3) return 0;
    
    const maxLefts = [];
    let tempMaxLeft = heights[0];
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > tempMaxLeft) tempMaxLeft = heights[i];
        maxLefts.push(tempMaxLeft);
    }
    
    const maxRights = [];
    let tempMaxRight = heights[heights.length - 1];
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > tempMaxRight) tempMaxRight = heights[i];
        maxRights.push(tempMaxRight);
    }
    maxRights.reverse();
        
    let totalRain = 0;
    
    for (let i = 0; i < heights.length; i++) {
        const tempAns = Math.min(maxLefts[i], maxRights[i]) - heights[i];
        if (tempAns > 0) totalRain += tempAns;
    }
    
    return totalRain;
};