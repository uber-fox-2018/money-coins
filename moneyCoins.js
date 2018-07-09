function convertToCoin(num) {
    var res = []
    var table = [10000,5000,2000,1000,500,200,100,50,20,10,1]

    for (let i = 0; i < table.length;i++) {
        if (num - table[i] >= 0) {
            res.push(table[i])
            num -= table[i]
            i--
        } 
    }
    return res
}

console.log(convertToCoin(7752))