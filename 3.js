/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*/

(function LargestPrimeFactor(value) {
	var value = 600851475143;
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {value = value / i;}
	}
console.log(i);
return i;
}());