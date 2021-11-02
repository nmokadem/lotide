const assert = require('chai').assert;
const _ = require('../index.js');

describe("#findKey", () => {

  const db = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
    };
 
  it("returns 'noma' for stars === 2", () => {
    const result1 = _.findKey(db, x => x.stars === 2);
    assert.strictEqual(result1, 'noma');
  });
  it("returns 'BLue Hill' for stars === 1", () => {
    const result1 = _.findKey(db, x => x.stars === 1);
    assert.strictEqual(result1, 'Blue Hill');
  });
  it("returns false for stars === 5", () => {
    result1 = _.findKey(db, x => x.stars === 5);
    assert.strictEqual(result1, false);
  });
});
