function convertToCoin(money) {
    let uang = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
    let coin = [];
    let sisa = money;

    for(let i = 0; i < uang.length; i++) {
        // console.log("Sekarang uang = ", uang[i]);
        for(let j = 0; j < uang.length; j++) {
            if(uang[i] <= sisa) {
                coin.push(uang[i]);
                sisa = sisa - uang[i];
            }
            
        }
    }

    return coin;

}

console.log(convertToCoin(25011))