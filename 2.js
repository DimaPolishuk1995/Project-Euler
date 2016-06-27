(function fibo () {
	var a = 1;
	var b = 2;
	var sum = 2;
	while (b<4000000) {
		var c = b;
		b = b+a;
		a = c;
		if (b%2 == 0) {
			sum += b;
		}
	}
	return sum;
}());