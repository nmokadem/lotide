const without = function(arr1, arr2) {
  let thisArray = [];
  for (let element of arr1) {
    if (!arr2.includes(element)) {
      thisArray.push(element);
    }
  }
  return thisArray;
};

module.exports = without;