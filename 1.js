(function arithmeticProgressionSum(){ 
var n, sum =0; 
for(var n =1000;n >=0;n--){ 
if (n % 3 === 0 || n % 5 === 0) { 
sum += n; 
} 
} 
console.log(sum); 
return sum; 
}());