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

// TEST CODE
printMessage("Lighthouse Labs", "Bootcamp",assertEqual("Lighthouse Labs", "Bootcamp"));
printMessage(1, 1,assertEqual(1, 1));
//assertEqual(1, 1);
