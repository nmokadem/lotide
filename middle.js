const middle = function(arr) {
  let midArray = [];
  const midIndex = Math.floor(arr.length / 2);

  if (arr.length < 3) return midArray;
  
  if (arr.length % 2 === 0) {
    midArray.push(arr[midIndex-1],arr[midIndex]);
  } else {
    midArray.push(arr[midIndex]);
  }
  return midArray;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]