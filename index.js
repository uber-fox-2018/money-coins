// cara 1

function convertToCoin(num) {
    let moneyChange = [100000, 50000, 20000, 10000, 500, 200, 100, 50, 20, 10, 1]
    let result = []
    let i = 0

    while (num > 0) {
        if (num >= moneyChange[i]) {
            result.push(moneyChange[i])
            num -= moneyChange[i]
        } else {
            i++
        }
    }
    return result
}
// cara 2

// function convertToCoin(num) {
//     let moneyChange = [100000, 50000, 20000, 10000, 500, 200, 100, 50, 20, 10, 1]
//     let result = []

//     for (let i = 0; i < moneyChange.length; i++) {
//         while (num >= moneyChange[i]) {
//             result.push(moneyChange[i])
//             num -= moneyChange[i]
//         } 
//     }
//     return result
// }

// cara 3 pake .repeat()


console.log(convertToCoin(543))