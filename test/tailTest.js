const assert = require('chai').assert;
const {tail}   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    const result = tail(input);  
    assert.deepEqual(result,expectedOutput);
  });

  it("tail function does not alter input array", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = 3;
    tail(input);
    const result = input.length;  
    assert.deepEqual(result,expectedOutput);
  });


});




// test/tailTest.js
// const tail = require('../tail');
// const {assertEqual, printMessage} = require('../assertEqual');


// // TEST CODE
// let result = tail(["Hello", "Lighthouse", "Labs"]);
// let expectedResult = ["Lighthouse", "Labs"];
// printMessage(result,["Lighthouse","Labs"],assertEqual(result.join(), expectedResult.join()));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words).length;
// result = words.length;
// expectedResult = 3;
// printMessage(result,expectedResult,assertEqual(result, expectedResult)); // original array should still have 3 elements!
