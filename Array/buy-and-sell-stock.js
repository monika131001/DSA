// Problem: Best Time to Buy and Sell Stock
// Pattern: Array / Greedy
// Space Complexity: O(1)
// Time Complexity: O(n)
// Key Idea: Track the minimum price seen so far and calculate the maximum profit by selling at each later price.

var maxProfit = function(prices) {
     let min = prices[0];
     let maxProfit = 0;

     for(let i = 1; i<prices.length; i++) {
        let profit = prices[i] - min;
        if(profit > maxProfit) {
            maxProfit = prices[i] - min;
        }

        if(prices[i] < min) {
            min = prices[i];
        }
     }

     return maxProfit;
    }
