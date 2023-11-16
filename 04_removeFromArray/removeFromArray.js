const removeFromArray = function(arr, ...delVal) {

  //Return array values as long as the current element doesn't equal the value you want to delete
  const newArr = Array.from(arr, curr => {

  
    for (let i = 0; i < delVal.length; i++) {
      //Delete value doesn't match the current one? Continue to the next Delete value.
      if (curr !== delVal[i]) {
        //Delete value doesn't match the current one and it's the last delete value? Store the current value.
        if (i == delVal.length - 1) {
          return curr;

        }
        //Delete value matches the current one? Don't store the number, store null to be filtered out later.
      } else {
        return null;
      }

    }


  
  });

  const filterNull = newArr.filter(curr => curr !== null);

  return filterNull;
}



// Do not edit below this line
module.exports = removeFromArray;
