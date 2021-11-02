const {assertArraysEqual} = require('./assertArraysEqual');
const {printMessage} = require('./assertEqual');

// TEST CODE
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => true

array1 = [1, 2, 3];
array2 = [3, 2, 1];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => false

array1 = ["1", "2", "3"];
array2 = ["1", "2", "3"];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => true

array1 = ["1", "2", "3"];
array2 = ["1", "2", 3];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => false

array1 = [[2, 3], [4]];
array2 = [[2, 3], [4]];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => true

array1 = [[2, 3], [4]];
array2 = [[2, 3], [4, 5]];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => false

array1 = [[2, 3], [4]];
array2 = [[2, 3], 4];
result = assertArraysEqual(array1, array2);
printMessage(array1, array2, result); // => false

//console.assert(eqArrays([1, 2, 3], [1, 2, 3], true)); // => should PASS
