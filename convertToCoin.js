// 1,10,20,50,100,200,500,1000,2000,5000,10000
function convertToCoin (param){
  var pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000]
  var hasil = []
  for (var i=0 ; i < pecahan.length ; i++){
    for (var j=0 ; j < pecahan.length ; j++){
      if ( param >= pecahan[pecahan.length-1-j]){
        param -= pecahan[pecahan.length-1-j]
        hasil.push(pecahan[pecahan.length-1-j])
        break;
      }
    }
  }
  return hasil
}

console.log(convertToCoin(7752))