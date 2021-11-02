const {assertEqual, printMessage} = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) result[item] += 1; else result[item] = 1;
    }
  }
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1, result1["Jason"]);

printMessage(result1["Jason"], 1,assertEqual(result1["Jason"], 1));
printMessage(result1["Karima"], undefined,assertEqual(result1["Karima"], undefined));
printMessage(result1["Fang"], 2,assertEqual(result1["Fang"], 2));
printMessage(result1["Agouhanna"], undefined,assertEqual(result1["Agouhanna"], undefined));

module.exports = countOnly;