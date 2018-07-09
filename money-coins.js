function convertToCoin(money) {
  let coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  for(let i = 0; i < coins.length-1; i++) {
    if(coins[i+1] > coins[i]) {
      let tmp = coins[i];
      coins[i] = coins[i+1];
      coins[i+1] = tmp;
      i = -1;
    }
  }
  
  let output = [];
  for(let i = 0; i < coins.length; i++) {
    let j = 0;
    while(money >= coins[i]) {
      money -= coins[i];
      output.push(coins[i]);
      j++;
    }
  }

  return output;

}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));