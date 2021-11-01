const assert = require('chai').assert;
const {middle}   = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const input = [1];
    const expectedOutput = [];
    const result = middle(input);  
    assert.deepEqual(result,expectedOutput);
  });

  it("returns [] for [1,2]", () => {
    const input = [1,2];
    const expectedOutput = [];
    const result = middle(input);
    assert.deepEqual(result,expectedOutput);
  });

  it("returns [2] for [1,2,3]", () => {
    const input = [1,2,3];
    const expectedOutput = [2];
    const result = middle(input);
    assert.deepEqual(result,expectedOutput);
  });

  it("returns [3] for [1,2,3,4,5]", () => {
    const input = [1,2,3,4,5];
    const expectedOutput = [3];
    const result = middle(input);
    assert.deepEqual(result,expectedOutput);
  });

  it("returns [2,3] for [1,2,3,4]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2,3];
    const result = middle(input);
    assert.deepEqual(result,expectedOutput);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3,4];
    const result = middle(input);
    assert.deepEqual(result,expectedOutput);
  });

});






// const {middle} = require('../middle');
// const {eqArrays} = require('../eqArrays');
// const {printMessage} = require('../assertEqual');


// let array = [1];
// let expectedArray = [];
// let result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

// array = [1, 2];
// expectedArray = [];
// result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

// array = [1, 2, 3];
// expectedArray = [2];
// result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

// array = [1, 2, 3, 4, 5];
// expectedArray = [3];
// result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

// array = [1, 2, 3, 4];
// expectedArray = [2, 3];
// result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

// array = [1, 2, 3, 4, 5, 6];
// expectedArray = [3, 4];
// result = middle(array);
// printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true
