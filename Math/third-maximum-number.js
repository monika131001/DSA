// Problem: Third Maximum Number
// Pattern: Array / Tracking Top 3
// Time: O(n)
// Space: O(1)
// Key idea: Track the largest, second largest, and third largest distinct numbers.

var thirdMax = function(nums) {
    let largest = -Infinity;
    let secLargest = -Infinity;
    let thirdLargest = -Infinity;

    if(nums.length == 2) return Math.max(nums[0], nums[1]);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largest ) {
            thirdLargest = secLargest;
            secLargest = largest;
            largest = nums[i];
        }
        else if(nums[i] < largest && nums[i] > secLargest) {
            thirdLargest = secLargest;
            secLargest = nums[i];

        }
        else if(nums[i] < secLargest && nums[i] > thirdLargest) {
            thirdLargest = nums[i];
        }
    }
    if (thirdLargest === -Infinity) {
      return largest;
    }
    return thirdLargest;   
};
