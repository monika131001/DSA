// Problem: Remove Element
// Pattern: Array / Two Pointers
// Time: O(n)
// Space: O(1)
// Key idea: Use x as the position for the next valid element.
// Traverse the array with i and copy every element that is not equal to val to nums[x].
// The final value of x is the number of remaining elements.

function removeElement(nums, val){
    let x = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != val){
            nums[x]= nums[i];
            x++;
        }
    }
    return x;
}
