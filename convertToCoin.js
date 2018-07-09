function convertToCoin(num){
    var coins = [10000,5000,2000,1000,500,200,100,50,20,10,1];
    var result=[];
    for(var i=0;i<coins.length;i++){
        while(coins[i]<=num){
            result.push(coins[i]);
            num-=coins[i];
        }
    }
    return result;

}
console.log(convertToCoin(543));//[500,20,20,1,1,1]
console.log(convertToCoin(7752));//[5000,2000,500,200,50,1,1]
console.log(convertToCoin(37454));//[10000,10000,10000,5000,2000,200,200,50,1,1,1,1]