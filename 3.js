(function LargestPrimeFactor(value) {
	var value = 600851475143;
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {value = value / i;}
	}
console.log(i);
return i;
}());