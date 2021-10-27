const printMessage = function(actual, expected, checkEqual) {
  if (checkEqual) {
    console.log("✅✅✅ Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, " !== ", expected);
  }
};

const assertEqual = function(actual, expected) {
  return actual === expected;
};

const findKeyByValue = function (obj, val) {
  const keys = Object.keys(obj);
  for (let key of keys){
    if (obj[key] === val) return key;
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));