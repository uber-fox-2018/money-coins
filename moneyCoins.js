function converCoin(coin){

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

	// HARD CODE
	
	// var isZero=true
	// while (isZero){
	// 	if (coin >= 10000){
	// 		coin -= 10000
	// 		result.push(10000)
	// 	}else if (coin >= 5000){
	// 		coin -= 5000
	// 		result.push(5000)
	// 	}else if (coin >= 2000){
	// 		coin -= 2000
	// 		result.push(2000)
	// 	}else if (coin >= 1000){
	// 		coin -= 1000
	// 		result.push(1000)
	// 	}else if (coin >= 500){
	// 		coin -= 500
	// 		result.push(500)
	// 	}else if (coin >= 200){
	// 		coin -= 200
	// 		result.push(200)
	// 	}else if (coin >= 100){
	// 		coin -= 100
	// 		result.push(100)
	// 	}else if (coin >= 50){
	// 		coin -= 50
	// 		result.push(50)
	// 	}else if (coin >= 20){
	// 		coin -= 20
	// 		result.push(20)
	// 	}else if (coin >= 10){
	// 		coin -= 10
	// 		result.push(10)
	// 	}else{
	// 		coin -= 1
	// 		result.push(1)
	// 	}

	// 	if (coin == 0){
	// 		isZero = false
	// 	}
	// }
	// return result
}

console.log(converCoin(543))
console.log(converCoin(7752))
console.log(converCoin(37454))
