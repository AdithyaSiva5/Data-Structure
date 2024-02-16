class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Function to build a min heap from an array of elements
  buildHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // Function to insert a new element into the min heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Function to remove and return the minimum element from the min heap
  removeMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  // Function to maintain the min heap property by fixing the violated heap property upwards
  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // Function to maintain the min heap property by fixing the violated heap property downwards
  heapifyDown(index) {
    let currentIndex = index;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let smallestIndex = currentIndex;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== currentIndex) {
      [this.heap[currentIndex], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[currentIndex],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Function to build a max heap from an array of elements
  buildHeap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // Function to insert a new element into the max heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Function to remove and return the maximum element from the max heap
  removeMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  // Function to maintain the max heap property by fixing the violated heap property upwards
  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // Function to maintain the max heap property by fixing the violated heap property downwards
  heapifyDown(index) {
    let currentIndex = index;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let largestIndex = currentIndex;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== currentIndex) {
      [this.heap[currentIndex], this.heap[largestIndex]] = [
        this.heap[largestIndex],
        this.heap[currentIndex],
      ];
      this.heapifyDown(largestIndex);
    }
  }
}

// Example usage for MinHeap:
const minHeap = new MinHeap();
minHeap.buildHeap([4, 8, 2, 6, 9, 1]);
console.log(minHeap.heap); // Output: [1, 4, 2, 6, 9, 8]
minHeap.insert(3);
console.log(minHeap.heap); // Output: [1, 3, 2, 4, 9, 8, 6]
console.log(minHeap.removeMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 3, 6, 4, 9, 8]

// Example usage for MaxHeap:
const maxHeap = new MaxHeap();
maxHeap.buildHeap([4, 8, 2, 6, 9, 1]);
console.log(maxHeap.heap); // Output: [9, 8, 4, 6, 4, 1]
maxHeap.insert(10);
console.log(maxHeap.heap); // Output: [10, 9, 4, 8, 4, 1, 6]
console.log(maxHeap.removeMax()); // Output: 10
console.log(maxHeap.heap); // Output: [9, 8, 4, 6, 4, 1]
