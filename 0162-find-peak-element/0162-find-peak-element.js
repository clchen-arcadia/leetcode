/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    
    
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        let checkIdx = Math.floor((left + right) / 2);
        
        let checkVal = nums[checkIdx];
        let leftNum = nums[checkIdx - 1];
        let rightNum = nums[checkIdx + 1];
        
        if (
            (checkVal > leftNum || leftNum === undefined)
            && (checkVal > rightNum || rightNum === undefined)
        ) {
            return checkIdx;
        } else {
            if (rightNum > checkVal) {
                left = checkIdx + 1;
            } else {
                right = checkIdx - 1;
            }
        }
    }
};