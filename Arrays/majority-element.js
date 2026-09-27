//Problem: Majority Element
//Pattern: Array + Hashmap
//Time Complexity: O(n)
//Space complexity: O(n)
// Key Idea: Store the frequency of each element in a HashMap and return the element whose count exceeds n/2.

var majorityElement = function(nums) {
    let map = {};

    for(let i = 0 ; i< nums.length; i++) {
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1;
        }
        else {
            map[nums[i]]++;
        }

        if(map[nums[i]] > nums.length/2){
            return nums[i];
        }
    }    
};
