const {assertEqual} = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  //let keys2 = Object.keys(object2);
  let obj = {};

  for (let key of keys1) { 
    obj = object1[key];
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
      if (!eqObjects(obj,object2[key])) return false;
      continue;
    }

    if (Array.isArray(object1[key])){
      if (!eqArrays(object1[key],object2[key])) return false;
    } else {
        if (!assertEqual(object1[key],object2[key])) return false;
    }
  }
  return true;
};

module.exports = eqObjects;
