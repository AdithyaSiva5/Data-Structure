function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const sortedarray = [];
  let leftindex = 0;
  let rightindex = 0;
  while (leftindex < left.length && rightindex < right.length) {
    if (left[leftindex] < right[rightindex]) {
      sortedarray.push(left[leftindex]);
      leftindex++;
    } else {
      sortedarray.push(right[rightindex]);
      rightindex++;
    }
  }

  while (leftindex < left.length) {
    sortedarray.push(left[leftindex]);
    leftindex++;
  }
  while (rightindex < right.length) {
    sortedarray.push(right[rightindex]);
    rightindex++;
  }
  return sortedarray;
}
const arr = [5, 2, 1, 4, 2, 5];
console.log(mergeSort(arr));

/*
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedarray.concat(left.slice(leftindex),right.slice(rightindex))

}

const arr = [5, 2, 1, 4, 2, 5];
console.log(mergeSort(arr)); // Corrected function call to mergeSort
 */
