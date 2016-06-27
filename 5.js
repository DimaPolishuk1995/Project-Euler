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