const printMessage = function(actual, expected, checkEqual) {
  if (checkEqual) {
    console.log("✅✅✅ Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, " !== ", expected);
  }
};

const assertEqual1 = function(actual, expected) {
  return actual === expected;
}

const assertEqual = function(actual, expected) {
  printMessage(actual, expected, assertEqual1(actual, expected));
};

const eqArrays = function(actual, expected) {
  let flag = true;

  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (assertEqual1(actual[i], expected[i])) continue;
      flag = false;
      break;
    }
  } else {
    flag = false;
  }

  printMessage(actual, expected, flag);
  return flag;
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS