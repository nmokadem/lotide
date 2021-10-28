const printMessage = function(actual, expected, checkEqual) {
  if (checkEqual) {
    console.log("✅✅✅ Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, " !== ", expected);
  }
};

const assertEqual = function(actual, expected) {
  return actual === expected;
}

const eqArrays = function(actual, expected) {
  let flag = true;

  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (assertEqual(actual[i], expected[i])) continue;
      flag = false;
      break;
    }
  } else {
    flag = false;
  }

  return flag;
};

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