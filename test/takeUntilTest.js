const assert = require('chai').assert;
const _ = require('../index.js');

describe("#takeUntil", () => {
  const db = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
 
  it("returns [ 1, 2, 5, 7, 2 ] for x < 0", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result1 = _.takeUntil(data1, x => x < 0);
    assert.deepEqual(result1, [ 1, 2, 5, 7, 2 ]);
  });
  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for x === ','", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result2 = _.takeUntil(data2, x => x === ',');
    assert.deepEqual(result2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});


