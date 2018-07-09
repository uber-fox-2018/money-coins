function convertToCoin(num) {
  var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  var result = [];
  for (let i = 0; i <= pecahan.length; i++) {
    if (num >= pecahan[i]) {
      result.push(pecahan[i]);
      num -= pecahan[i];
      i -= 1;
    }
  }
  return result;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
