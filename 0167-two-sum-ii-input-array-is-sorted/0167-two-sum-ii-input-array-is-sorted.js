/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length - 1];
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    throw new Error("solution not found");
};