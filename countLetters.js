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

const countLetters = function(letters) {
  let thisObj = {};
  for (let letter of letters){ 
    if (thisObj[letter]) thisObj[letter] += 1; else thisObj[letter] = 1;
  }
  return thisObj;
}

result1 = countLetters('LHLLHLLHLLHL');

printMessage(result1["L"], 8,assertEqual(result1["L"], 8));
printMessage(result1["B"], undefined,assertEqual(result1["B"], undefined));
printMessage(result1["H"], 4,assertEqual(result1["H"], 4));
