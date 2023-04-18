/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    
    let [left, right] = [0, nums.length - 1];
    let check = null;
    
    while (left <= right) {
        check = Math.floor((left + right) / 2);
        const value = nums[check];
        
        if (value === target) {
            return check;
        } else if (value > target) {
            right = check - 1;
        } else if (value < target) {
            left = check + 1;
        }
    }
    
    return -1;
};