const convertToCoin = (money) => {
  const coin = [
    1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000
  ] 

  let resultConvertCoin = []
  for (let i = coin.length-1; i >= 0; i--) {
    while (money >= coin[i]) {
      if (money >= coin[i]) {
        resultConvertCoin.push(coin[i])
        money -= coin[i]
      }
    }
  }

  return resultConvertCoin
}
console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
console.log(convertToCoin(32532));
