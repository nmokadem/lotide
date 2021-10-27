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


const countLetters = function(letters) {
  let thisObj = {};
  let i = 0;
  for (let letter of letters){ 
    if (!thisObj[letter]) thisObj[letter] = [];
    thisObj[letter].push(i);
    i++;
  }
  return thisObj;
}

result1 = countLetters("lighthouse in the house");
//console.log(result1);
//console.log(result1['l']);

assertArraysEqual(result1["l"], [0]);
printMessage(result1["z"], undefined, assertEqual(result1["z"], undefined));
assertArraysEqual(result1["h"], [ 3, 5, 15, 18 ]);

/*
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  ' ': [ 10, 13, 17 ],
  n: [ 12 ]
}
*/