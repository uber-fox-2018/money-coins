function convertToCoin(money) {
    let change = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
    let coins = [];

    for (let i = 0; i < change.length; i++) {
            while (money >= change[i]) {
                coins.push(change[i]);
                money -= change[i];
            }
    }
    return coins;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));