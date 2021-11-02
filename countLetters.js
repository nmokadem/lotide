const countLetters = function(letters) {
  let thisObj = {};
  for (let letter of letters){ 
    if (thisObj[letter]) thisObj[letter] += 1; else thisObj[letter] = 1;
  }
  return thisObj;
}


module.exports = countLetters;