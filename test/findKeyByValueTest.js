const assert = require('chai').assert;
const _ = require('../index.js');

describe("#eqArrays", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});

