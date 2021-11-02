const assert = require('chai').assert;
const _ = require('../index.js');

describe("#letterPositions", () => {
  result1 = _.letterPositions("lighthouse in the house");

  /*
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  ' ': [ 10, 13, 17 ],
  n: [ 12 ]
}
*/

  it("returns [0] for result1['l']", () => {
    assert.deepEqual(result1["l"], [0]);
  });
  it("returns undefined for result1['z']", () => {
    assert.strictEqual(result1["z"], undefined); 
  });
  it("returns [ 3, 5, 15, 18 ] for result1['h']", () => {
    assert.deepEqual(result1["h"], [ 3, 5, 15, 18 ]); 
  });
});
