/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.*/


var palindrom = 0;
for (var n = 999; n >= 100; n = n - 1) {
    for (var i = 999; i >= 100; i = i - 1) {
        number = i * n;
        if (number == number.toString().split('').reverse().join('') && number > palindrom) {
            palindrom = number;
        }
    }
}
console.log(palindrom);