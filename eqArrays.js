const {assertEqual} = require('./assertEqual');

const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length) {
    return false;
  }

  let flag = true;

  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i])) {
      if (!eqArrays(actual[i],expected[i])) return false;
      continue;
    }
  
    if (assertEqual(actual[i], expected[i])) continue;

    flag = false;
    break;
  }

  return flag;
};

module.exports = {eqArrays};