const letterPositions = function(letters) {
  let thisObj = {};
  let i = 0;
  for (let letter of letters){ 
    if (!thisObj[letter]) thisObj[letter] = [];
    thisObj[letter].push(i);
    i++;
  }
  return thisObj;
}


module.exports = letterPositions;