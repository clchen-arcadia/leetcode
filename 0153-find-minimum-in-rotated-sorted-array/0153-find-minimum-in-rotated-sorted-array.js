/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) throw new Error('invalid input');
    if (nums.length === 1) return nums[0];
    
    let [left, right] = [0, nums.length - 1];
    const [leftVal, rightVal] = [nums[left], nums[right]];
    
    if (leftVal <= rightVal) return leftVal;
    
    let currLeastVal = null;
    
    while (left <= right) {
        const curr = Math.floor((left + right) / 2);
        
        const onLesserSide = nums[curr] <= rightVal;
        
        if (onLesserSide) {
            currLeastVal = nums[curr];
            right = curr - 1;
        } else {
            left = curr + 1;
        }
    }
    
    return currLeastVal;
};