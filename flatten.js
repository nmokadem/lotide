let thisArray = [];
let element = "";
const flatten = function(arr) {
  //console.log(arr);
  //let thisArray = [];
  for (element of arr) {
    if (Array.isArray(element)) {
      flatten(element);
      continue;
    }
    thisArray.push(element);
  }
  return thisArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6,[7,8]]]));




//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
