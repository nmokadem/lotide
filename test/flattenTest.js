const assert = require('chai').assert;
const _ = require('../index.js');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const data1 = [1, 2, [3, 4], 5, [6]];
    const result = _.flatten(data1);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for [1, 2, [3, 4], 5, [6,[7,8]]]", () => {

    const data1 = [1, 2, [3, 4], 5, [6,[7,8]]];
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = _.flatten(data1);
    assert.deepEqual(result, expectedArray);
  });
});
