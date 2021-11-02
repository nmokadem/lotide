const assert = require('chai').assert;
const _ = require('../index.js');

describe("#eqObjects", () => {
  it("returns true for { a: 1 }, { a: 1 }", () => {
    assert.strictEqual(_.eqObjects({ a: 1 }, { a: 1 }), true);
  });

  it("returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.strictEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
