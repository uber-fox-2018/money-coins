function convertToCoin(number) {

    return toCoinRecursive(number, []);
}

function toCoinRecursive(number, result) {
    let coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

    if (number === 0) {
        return result;
    }
    if (number >= coins[coins.length - 1]) {
        result.push(coins[coins.length - 1]);
        return toCoinRecursive(number - coins[coins.length - 1], result);
    }
    for (let i = coins.length - 2; i >= 0; i--) {
        if (number < coins[i + 1] && number >= coins[i]) { 
            result.push(coins[i]);
            return toCoinRecursive(number - coins[i], result);
        }
    }
}