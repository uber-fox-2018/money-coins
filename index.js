function convertToCoin(num) {
    let change = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let result = []


    for (let i = 0; i <= change.length; i++) {


        // console.log(change[i])

        while (num >= change[i]) {
            num -= change[i]
            result.push(change[i])

        }
    }


    return result

}

console.log(convertToCoin(543)
);

console.log(convertToCoin(7752)
);

console.log(convertToCoin(37454)
);


