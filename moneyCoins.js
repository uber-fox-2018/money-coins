function convertToCoin(num){
    let pecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    let arr = []
    for (let i = 0; i < pecahan.length; i++){
        if (num >= pecahan[i]){
            num-=pecahan[i]
            arr.push(pecahan[i])
            i-=1
        }
    }
    return arr
}

console.log(convertToCoin(7752))