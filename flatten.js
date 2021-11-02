const flatten = function(arr) {
  let thisArray = [];
  for (let element of arr) {   
    if (Array.isArray(element)) {;
      thisArray = thisArray.concat(flatten(element));
    } else {
      thisArray.push(element);
    }  
  }
  return thisArray;
};

module.exports = flatten;