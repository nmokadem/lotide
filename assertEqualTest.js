// test/assertEqualTest.js

const {assertEqual, printMessage} = require('./assertEqual');

// TEST CODE
printMessage("Lighthouse Labs", "Bootcamp",assertEqual("Lighthouse Labs", "Bootcamp"));
printMessage(1, 1, assertEqual(1, 1));
//assertEqual(1, 1);