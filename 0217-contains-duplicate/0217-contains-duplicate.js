/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setSeen = new Set();

    for (let num of nums) {
        if (setSeen.has(num)) return true;
        else setSeen.add(num)
    }

    return false;
};