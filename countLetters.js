const {assertEqual, printMessage} = require('./assertEqual');

const countLetters = function(letters) {
  let thisObj = {};
  for (let letter of letters){ 
    if (thisObj[letter]) thisObj[letter] += 1; else thisObj[letter] = 1;
  }
  return thisObj;
}

result1 = countLetters('LHLLHLLHLLHL');

printMessage(result1["L"], 8,assertEqual(result1["L"], 8));
printMessage(result1["B"], undefined,assertEqual(result1["B"], undefined));
printMessage(result1["H"], 4,assertEqual(result1["H"], 4));

module.exports = countLetters;