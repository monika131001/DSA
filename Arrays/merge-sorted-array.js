// Problem: Merge Sorted Array 
// Pattern: Array / Sorting 
// Space Complexity: O(1) auxiliary space 
// Time Complexity: O((m + n) log(m + n)) 
// Key Idea: Remove the extra zeros, add all elements of nums2 to nums1, then sort nums1 in ascending order.

function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    nums1.splice(m, n);

    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => a - b);
    
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6],3));
