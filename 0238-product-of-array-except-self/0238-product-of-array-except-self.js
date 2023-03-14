/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const outputArray = Array(nums.length).fill(1);
    
    let runningLeftProduct = 1;
    for (let i=0; i < nums.length; i++) {
        outputArray[i] *= runningLeftProduct;
        runningLeftProduct *= nums[i]
    }
    
    let runningRightProduct = 1;
    for (let j=nums.length - 1; j >= 0; j--) {
        outputArray[j] *= runningRightProduct;
        runningRightProduct *= nums[j];
    }
    
    return outputArray;
};