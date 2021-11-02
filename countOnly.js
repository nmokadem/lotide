// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) result[item] += 1; else result[item] = 1;
    }
  }
  return result;
}

module.exports = countOnly;