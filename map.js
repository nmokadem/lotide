const {assertEqual, printMessage} = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  printMessage(actual, expected, eqArrays(actual, expected));
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => true

module.exports = map;