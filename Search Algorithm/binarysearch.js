function binarySearch(arr, target) {
  let leftindex = 0;
  let rightindex = arr.length - 1;
  while (leftindex <= rightindex) {
    let middleindex = Math.floor((leftindex + rightindex) / 2);
    if (arr[middleindex] === target) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      rightindex = middleindex - 1;
    }
    if (target > arr[middleindex]) {
      leftindex = middleindex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], -5));
console.log(binarySearch([-5, 2, 4, 6, 10], 2));
console.log(binarySearch([-5, 2, 4, 6, 10], 4));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// Big-O = O(logn)
