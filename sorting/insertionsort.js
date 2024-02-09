function insertionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr > arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
const arr = [5, 2, 1, 4, 2, 5];
console.log(insertionsort(arr));
