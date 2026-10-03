// Problem: Reverse Words in a String
// Pattern: String Manipulation / Two Pointers
// Space Complexity: O(n)
// Time Complexity: O(n)
// Key Idea: Trim extra spaces, split the string into words, reverse the words using two pointers, and join them with single spaces.

var reverseWords = function(s) {
  
  s = s.trim().split(/\s+/);
  let start = 0;
  let end = s.length-1;

  while(start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp; 

    start++;
    end--;
  }
  
  return s.join(" ");
    
};
