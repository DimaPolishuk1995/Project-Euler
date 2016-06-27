var palindrom = 0;
for (var n = 999; n >=100; n=n-1) {
	for (var i = 999; i >=100; i=i-1) {
  	number = i*n;
    if (number == number.toString().split('').reverse().join('') && number > palindrom) {
			 	palindromes = number;
    }
  }
}
console.log(palindrom);