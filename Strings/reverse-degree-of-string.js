 // Problem: Calculate the Reverse Degree of a String
 // Pattern: String Manipulation / ASCII
 // Space Complexity: O(1)
 // Time Complexity: O(n)
 // Key Idea: Convert each letter to its alphabet position, calculate its reversed value as 27 - position, multiply by its 1-based index, and add to the result.

var reverseDegree = function(s) {
 let result = 0;

  for(let i=0; i<s.length; i++){
    let index = s.charCodeAt(i)%96
    let rev = 27-index;
     result += rev * (i + 1);
  }

  return result;    
};

console.log(reverseDegree("abc"));
