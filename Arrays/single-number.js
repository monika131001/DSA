// Problem: Single Number
// Pattern: Map / XOR
// Time: O(n)
// Space: O(1)
// Key idea: Add the number when it appears for the first time. If it appears again, remove it from the map. The remaining key is the single number.
// XOR cancels duplicate numbers because a ^ a = 0, and 0 ^ a = a. The remaining value is the single number.

var singleNumber = function(nums) {

    let map = {};
    
    // for(let i = 0; i < nums.length; i++) {
    //     if(!map[nums[i]]) {
    //         map[nums[i]] = 1;
    //     }        
    //     else {
    //         delete map[nums[i]];
    //     }
    // }
    //    return Number(Object.keys(map)[0]);

    let result = 0;
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]) {
            result = result ^ nums[i];
        }
    }
    return result;
};

console.log(singleNumber([2, 8 , 9, 6, 6, 8, 2]));
