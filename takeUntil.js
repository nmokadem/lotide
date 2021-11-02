const {assertEqual, printMessage} = require('./assertEqual');
const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  printMessage(actual, expected, eqArrays(actual, expected));
};

const takeUntil = function(array, callback) {
  let results = [];

  for (let element of array) {
    if (callback(element)) return results;
    results.push(element);
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[1, 2, 5, 7, 2]);
/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

module.exports = takeUntil;