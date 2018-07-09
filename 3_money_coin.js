function convertToCoin(uang) {
    const coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let result = []
    for(let a=0; a<coin.length; a++){
        if(uang >= coin[a]){
            uang -= coin[a]
            a -= 1
            result.push(coin[a+1])
        }
    }
    return result
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))