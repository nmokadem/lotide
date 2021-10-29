const assertEqual = function(actual, expected) {
  return actual === expected;
};

const eqArrays = function(actual, expected) {
  let flag = true;

  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      
      if (Array.isArray(actual[i])) {
        if (!eqArrays(actual[i],expected[i])) return false;
        continue;
      }
  
      if (assertEqual(actual[i], expected[i])) continue;
      flag = false;
      break;
    }
  } else {
    flag = false;
  }

  return flag;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]), eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), eqArrays([[2, 3], [4]], [[2, 3], 4]));