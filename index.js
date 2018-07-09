function convertToCoin (money) {
    // your implementation code here
    var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    var pecahanBaru = []

    while(money > 0){
        for(var i = 0; i < pecahan.length;i++){
            if(money - pecahan[i] >= 0){
                pecahanBaru.push(pecahan[i])
                money -= pecahan[i]
                i--
            }
        }
        return pecahanBaru
    }
  }
  
  // Drive code
  console.log(convertToCoin(543))
  //output : [ 500, 20, 20, 1, 1, 1 ]
  
  console.log(convertToCoin(7752))
//   //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]
  
  console.log(convertToCoin(37454))
//   //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]