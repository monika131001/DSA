//Problem: Two sum
//Pattern: Hashmap
//Time: O(n)
//Space: O(n)
//Key idea: Store each element and its index in a Hashmap and then search for the complement (target - current number)

var twoSum = function(nums, target) {
    let map = {};
    
for(let i=0; i< nums.length; i++ ) {
    map[nums[i]]=i;
}

for(let i = 0; i<nums.length; i++) {
    let pairToFind = target - nums[i];
    if(map[pairToFind] && map[pairToFind]!=i){
        return[i, map[pairToFind]];
    }
}   
};
