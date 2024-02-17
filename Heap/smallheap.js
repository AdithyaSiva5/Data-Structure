function heapify(arr, length, parentIndex) {
  let largest = parentIndex;
  let left = parentIndex * 2 + 1;
  let right = left + 1;
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
    heapify(arr, length, largest); // Pass the length of the array
  }
  return arr;
}

function heapsort(arr) {
  const length = arr.length;
  let lastparentIndex = Math.floor(length / 2 - 1);
  let lastChildIndex = length - 1;
  while (lastparentIndex >= 0) {
    heapify(arr, length, lastparentIndex);
    lastparentIndex--;
  }
  while (lastChildIndex >= 0) {
    [arr[0], arr[lastChildIndex]] = [arr[lastChildIndex], arr[0]];
    heapify(arr, lastChildIndex, 0); // Pass the length of the array and fix the index
    lastChildIndex--;
  }
  return arr;
}

console.log(heapsort([4, 6, 3, 2, 9])); // Output: [2, 3, 4, 6, 9]
