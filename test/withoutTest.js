const assert = require('chai').assert;
const _ = require('../index.js');

describe("#without", () => {
  const db = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
 
  it("returns [ 1, 3 ] for [1, 2, 3] and [2]", () => {
    const data1 = [1, 2, 3];
    const data2 = [2];
    const result = _.without(data1, data2);
    assert.deepEqual(result, [ 1, 3 ]);
  });
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'] and ['lighthouse']", () => {
    const data1 = ['hello', 'world', 'lighthouse'];
    const data2 = ['lighthouse'];
    const result = _.without(data1, data2);
    assert.deepEqual(result, ['hello', 'world']);
  });
});
