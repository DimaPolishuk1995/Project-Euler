/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

(function Size() {
  var a = 0;
  var b = 1;
  var maxSize = 20;
  var found = false;
  while (found === false) {
    a += maxSize;
    while (a % b === 0 && b <= maxSize) {
      if (b === maxSize) {
        found = true;
      }
      b++;
    }
    b = 1;
  }
  console.log(a);
}());