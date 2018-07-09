
function convertToCoin(money){
    let moneyConvert = [10000,5000,2000,1000,500,200,100,50,20,10,1] // kamus untuk dikurang
    let result = [] // variabel tampung array

    for (var i = 0; i < moneyConvert.length ; i++){ //melakukan looping untuk moneyconvert
        while (money >= moneyConvert[i]) { //membuat perulangan pengurangan (while) uang lbih kecil dari uangconvert
            money = money - moneyConvert[i] //uang sama dengan uang dikurang moneyconvert
            result.push(moneyConvert[i]) //push money convert (pengurangan money)
        }
    }
    return result
}


console.log(convertToCoin(543)) //[500,20,20,1,1,1])
console.log(convertToCoin(7752)) //[5000,2000,500,200,50,1,1])
console.log(convertToCoin(37454)) //[10000,10000,10000,5000,200,200,,50,1,1,1,1])

