// Problem: Fibonacci Number / Fibonacci Series
// Pattern: Recursion / Iteration
// Time: O(n) - Iterative approach
// Space: O(1)
// Key idea: Start with 0 and 1, then calculate each next number by adding the previous two numbers. 
// Update the two variables and continue until the required Fibonacci number is reached.

var fib = function(n) {
    if(n <= 1)  return n;

    //Recursive
    // return fib(n-1) + fib(n-2);

    //Iterative
    let a = 0;
    let b = 1;
  console.log(a);
  console.log(b);

    for(let i = 1; i < n; i++) {
        let next = a + b;
         
        a = b;
        b = next;
      console.log(b);
    }
  return b;
}

console.log(fib(10));
