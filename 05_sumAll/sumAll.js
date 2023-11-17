const sumAll = function(val1, val2) {
  let sumVal = 0;
  let largeVal = 0;

  let minusCheck = val1 < 0 || val2 < 0;
  let numberTypeCheck = typeof val1 != "number" || typeof val2 != "number";

  if (minusCheck || numberTypeCheck) {
    return "ERROR";
  }

  //Check largest number
  if ( val1 > val2) {
    largeVal = val1;
  } else {
    largeVal = val2;
  }

  for (let i = 1; i <= largeVal; i++) {
    sumVal += i;
  }

  return sumVal;
};

// Do not edit below this line
module.exports = sumAll;
