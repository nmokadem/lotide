const assert = require('chai').assert;
const _ = require('../index.js');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const data1 = ["ground", "control", "to", "major", "tom"];
    const data2 = ["g", "c", "t", "m", "t"];
    const result = _.map(data1,word => word[0]);
    assert.deepEqual(result, data2);
  });
});

