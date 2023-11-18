const convertToCelsius = function(fahrenheit) {
  //Take fahrentheit
  let toCelsius = (fahrenheit - 32) * (5/9);
  let strToNum;

  if (Number.isInteger(toCelsius)) {
    return Math.trunc(toCelsius);
  } 

  strToNum = parseFloat(toCelsius.toFixed(1))

  return strToNum;
};

const convertToFahrenheit = function(celsius) {
  let toFahrenheit = (celsius * (9/5) + 32);
  let strToNum;

  if (Number.isInteger(toFahrenheit)) {
    return Math.trunc(toFahrenheit);
  }

  strToNum = parseFloat(toFahrenheit.toFixed(1))

  return strToNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
