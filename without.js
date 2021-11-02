const {assertEqual, printMessage} = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  printMessage(actual, expected, eqArrays(actual, expected));
};

const without = function(arr1, arr2) {
  let thisArray = [];
  for (let element of arr1) {
    if (!arr2.includes(element)) {
      thisArray.push(element);
    }
  }
  return thisArray;
};

// TEST CODE

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;