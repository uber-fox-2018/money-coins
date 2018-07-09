function convertToCoin(money) {
    let coins = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    let i = 0;
    let coinArray = []

    while (money > 0) {
        if (money >= coins[i]) {
            coinArray.push(coins[i])
            money -= coins[i]
        }else if (money < coins[i]) {
            i++;
        }
    }
    return coinArray
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));

