
function convertToCoin (money) {
    let convArr = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let containArr = []
    for (let i = 0; i < convArr.length; i++) {
        while (money >= convArr[i]) {
            containArr.push(convArr[i])
            money -= convArr[i]
        }
    }
    return `output: [${containArr}]`
}
  
// Drive code
console.log(convertToCoin(543))

console.log(convertToCoin(7752))

console.log(convertToCoin(37454))