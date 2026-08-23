//Problem: Reverse Integer
//Pattern: Numbers
//Time: O(n)
//Space: O(1)
//Key idea: Extract the last digit using % 10 and build the reversed number digit by digit.
//Use Math.trunc() to remove the last digit and handle negative numbers.
//Return 0 if the reversed number exceeds the 32-bit integer range.

var reverse = function (x) {
    let result = 0;

    while (x != 0) {
        let last = x % 10;
        result = result * 10 + last;
        x = Math.trunc(x / 10);
    }
      if (result > 2147483647 || result < -2147483648) {
        return 0;
    }

    return result;
};
