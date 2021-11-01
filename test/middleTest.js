const {middle} = require('../middle');
const {eqArrays} = require('../eqArrays');
const {printMessage} = require('../assertEqual');


let array = [1];
let expectedArray = [];
let result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

array = [1, 2];
expectedArray = [];
result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

array = [1, 2, 3];
expectedArray = [2];
result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

array = [1, 2, 3, 4, 5];
expectedArray = [3];
result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

array = [1, 2, 3, 4];
expectedArray = [2, 3];
result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true

array = [1, 2, 3, 4, 5, 6];
expectedArray = [3, 4];
result = middle(array);
printMessage(result, expectedArray, eqArrays(result,expectedArray)); // => true
