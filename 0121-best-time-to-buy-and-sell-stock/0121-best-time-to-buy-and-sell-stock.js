/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bestProfit = 0;
    let lowest = prices[0];
    
    for (let price of prices) {
        if (price < lowest) lowest = price;
        
        bestProfit = Math.max(bestProfit, price - lowest);
    }
    
    return bestProfit;
};