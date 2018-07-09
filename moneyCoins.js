function convertToCoin(num){
    var newNum = num
    var kembalian = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    var result = []
    for(var i = 0 ; i < kembalian.length;i++){
        for(var j = 0 ; j < kembalian.length ; j++){
            if(kembalian[i] <= newNum){
                newNum-=kembalian[i]
                result.push(kembalian[i])
            }
        }
    }
    console.log(result)
}
console.log(convertToCoin(543)) // [500, 20, 20, 1, 1, 1]
console.log(convertToCoin(7752)) // [5000, 2000, 500, 200, 50, 1, 1]
console.log(convertToCoin(37454)) // [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]