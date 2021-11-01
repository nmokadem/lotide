// test/headTest.js

const head = require('../head');
const {assertEqual, printMessage} = require('../assertEqual');

// TEST CODE
printMessage([5,6,7], 5,assertEqual(head([5,6,7]), 5));
printMessage(["Hello", "Lighthouse", "Labs"], "Hello",assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));