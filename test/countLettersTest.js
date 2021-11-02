const assert = require('chai').assert;
const _ = require('../index.js');

describe("#countLetters", () => {
  result1 = _.countLetters('LHLLHLLHLLHL');

  it("returns 8 for result1['L']", () => {
    assert.strictEqual(result1["L"], 8);
  });
  it("returns undefined for result1['B']", () => {
    assert.strictEqual(result1["B"], undefined);
  });
  it("returns 4 for result1['H']", () => {
    assert.strictEqual(result1["H"], 4);
  });
});
