// test/tailTest.js
const tail = require('../tail');
const {assertEqual, printMessage} = require('../assertEqual');


// TEST CODE
let result = tail(["Hello", "Lighthouse", "Labs"]);
let expectedResult = ["Lighthouse", "Labs"];
printMessage(result,["Lighthouse","Labs"],assertEqual(result.join(), expectedResult.join()));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words).length;
result = words.length;
expectedResult = 3;
printMessage(result,expectedResult,assertEqual(result, expectedResult)); // original array should still have 3 elements!
