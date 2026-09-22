// Problem: Move zeroes
// Pattern: Two pointers
// Time: O(n)
// Space: O(1)
// Key idea: Move non-zero elements to the front, then fill the remaining positions with zero.

class Solution {
    public void moveZeroes(int[] nums) {
         int p = 0;
        for(int i=0; i<nums.length; i++){
           if(nums[i] != 0){
            nums[p++] = nums[i];
           }
        }
        for(int j = p; j<nums.length; j++){
            nums[j] = 0;
        }
    }
}
