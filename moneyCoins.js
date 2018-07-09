function convertCoin(coin){

	var exchangeArr =[10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
	var result =[]
	
	for (var i = 0 ; i < exchangeArr.length; i++){
		if (coin >= exchangeArr[i]){
			coin -= exchangeArr[i]
			result.push(exchangeArr[i])
			i-=1
		}
	}
	return result
}

console.log(converCoin(543))
console.log(converCoin(7752))
console.log(converCoin(37454))
