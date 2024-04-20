// ref: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * Approach
 */
var maxProfit = function(prices) {
    let minPrice = Infinity, maxPrice = 0;
    for(let i = 0; i < prices.length; i++)
    {
        if(minPrice > prices[i])
        {
            minPrice = prices[i]
        }
        else
        {
            if(prices[i] - minPrice > maxPrice)
            {
                maxPrice = prices[i] - minPrice
            }
        }
    }

    return maxPrice
};