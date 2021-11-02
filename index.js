const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKeyByValue : findKeyByValue,
  countLetters : countLetters,
  countOnly : countOnly,
  findKey : findKey,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
  flatten : flatten,
};
