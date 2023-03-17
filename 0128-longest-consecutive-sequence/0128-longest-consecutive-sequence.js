/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const setNums = new Set(nums);
    
    maxSeqLen = 0;
    
    for (let num of nums) {
        if (setNums.has(num - 1)) continue;
        
        let currSeqLen = 1;
        while (setNums.has(num + 1)) {
            currSeqLen++;
            num++;
        }
        if (currSeqLen > maxSeqLen) maxSeqLen = currSeqLen;
    }
    
    return maxSeqLen;
};