/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) throw new Error('array too few elements');
        
    const triplets = [];
    
    let numsCopy = nums.slice();
    numsCopy.sort((a, b) => a - b);
    
    for (let i = 0; i < numsCopy.length - 2; i++) {
        if (numsCopy[i] > 0) continue;
        
        if (numsCopy[i] === numsCopy[i - 1]) continue;
        
        let low = i + 1;
        let high = numsCopy.length - 1;
        
        while (low < high) {
            sum = numsCopy[i] + numsCopy[low] + numsCopy[high];
            
            if (sum < 0) {
                low++;
            } else if (sum > 0) {
                high--;
            } else {
                triplets.push([numsCopy[i], numsCopy[low], numsCopy[high]]);
                
                const [last_low_occur, last_high_occur] = [numsCopy[low], numsCopy[high]];
                while (numsCopy[low] === last_low_occur) low++;
                while (numsCopy[high] === last_high_occur) high--;
            }
        }
    }
    
    return triplets;
};