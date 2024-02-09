function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minindex]) {
        minindex = j;
      }
    }
    if (minindex != i) {
      let temp = arr[i];
      arr[i] = arr[minindex];
      arr[minindex] = temp;
    }
  }
  return arr;
}
const arr = [5, 2, 1, 4, 2, 5];
console.log(selectionsort(arr));
