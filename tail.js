const assertEqual = function(actual, expected) {
  //console.assert( actual === expected );
  let str1 = actual;
  let str2 = expected;

  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    str1 = actual.join();
    str2 = expected.join();
  }

  if (str1 === str2) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) return [];
  return arr.slice(1);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!