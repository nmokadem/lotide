const {assertEqual} = require('./assertEqual');

const findKeyByValue = function (obj, val) {
  const keys = Object.keys(obj);
  for (let key of keys){
    if (assertEqual(obj[key], val)) return key;
  }
}

module.exports = findKeyByValue;

