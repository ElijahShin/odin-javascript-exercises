const reverseString = function(string) {
  if(string == "") return string;

  const reverseStr = string.split('').reverse().join("");

  return  reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
