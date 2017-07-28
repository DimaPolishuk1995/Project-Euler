/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.*/

function sumOfMultiples(number) {
  let sum = 0;
  for (let n = 0; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  }
  return sum;
}

const resultOne = sumOfMultiples(10);
console.log(resultOne); //23

const resultTwo = sumOfMultiples(100);
console.log(resultTwo); //2318

const resultThree = sumOfMultiples(1000);
console.log(resultThree); //233168