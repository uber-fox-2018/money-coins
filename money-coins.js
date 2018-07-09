function convertToCoin(money){
    const coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

    let remains =  money

    let result = []

    for(let i = 0; i < coins.length; i++){
        for(let j = 0; j < coins.length; j++){
            if(remains >= coins[i]){
                result.push(coins[i])
                remains = remains - coins[i]
            }
        }    
    }

    return result
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))