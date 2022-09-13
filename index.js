function kaprekarNumbers(p, q) {
  // 1. p ---> 99 ---> 99 x 99 = 9801
  let modifiedKaprekarList = [];
  // 2. 9801 --> `98`, `01` example 9 x 9 = 81 ==> '8' and '1'
  for(let range = p; range <= q; range++) {
      if(range === 1) {
        modifiedKaprekarList.push(range);
        continue;
      }
      let squareOfNumber = range * range;
      squareOfNumber = squareOfNumber.toString();
      let median = squareOfNumber.length / 2;
      let leftValue = squareOfNumber.substring(0, median);
      let rightValue = squareOfNumber.split(leftValue)[1];     
      let isKaprekar = +leftValue + +rightValue === range;
      if(isKaprekar) {
          modifiedKaprekarList.push(range)
      }
  }
  if(modifiedKaprekarList.length > 0) {
      console.log(modifiedKaprekarList.join(' '));
  } else {
      console.log('INVALID RANGE');
  }
}

kaprekarNumbers(1, 99999);