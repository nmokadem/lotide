const takeUntil = function(array, callback) {
  let results = [];

  for (let element of array) {
    if (callback(element)) return results;
    results.push(element);
  }
  return results;
}

module.exports = takeUntil;