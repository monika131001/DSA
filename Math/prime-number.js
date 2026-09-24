// Problem: Prime Number or not
// Pattern: Number Theory / Loop
// Time: O(√n)
//Space: O(1)
//Key idea: Handle 2 separately, reject even numbers, then check only odd divisors up to √n.

function isPrime(n) {

  if(n<=1) return false;
  if(n == 2) return true;
  if(n % 2 == 0) return false;

  for(let i = 2; i*i <= n; i+=2) {
    if(n % i ==0) {
      return false;
    }
  }
  return true;  
}
console.log(isPrime(10));
