const convertToCoin = (money) => {
  const converter = [
    10000,
    5000,
    2000,
    1000,
    500,
    200,
    100,
    50,
    20,
    10,
    1
  ];

  let output = [];

  
  var str = '';
  while (money > 0) {
    for (let i in converter){
      if (money >= converter[i]){
        let denominator = Math.floor(money / converter[i]);
        money -= denominator * converter[i];
        str += `${(String(converter[i]+',')).repeat(denominator)}`;
        // console.log(i, denominator, converter[i])
      }
    }
  };
  
  let strArr = str.split(',');
  strArr.pop();

  strArr.forEach(newStr => {
    output.push(Number(newStr))
  });

  return output;
}

console.log(convertToCoin(2503));
