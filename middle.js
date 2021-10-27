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

const middle = function(arr) {
  let midArray = [];
  const midIndex = Math.floor(arr.length / 2);

  if (arr.length < 3) return midArray;

  if (arr.length % 2 === 0) {
    midArray.push(arr[midIndex-1],arr[midIndex]);
  } else {
    midArray.push(arr[midIndex]);
  }
  return midArray;
}

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
