class CircularQueue {
  constructor(capacity) {
    this.item = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  size() {
    return this.currentLength;
  }
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.item[this.rear] = item;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      return "Queue is full";
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.item[this.front];
    this.item[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.item[this.front];
    }
    return "Queue is Empty";
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i = this.front;
      let str = "";
      do {
        str += this.item[i] + " ";
        i = (i + 1) % this.capacity;
      } while (i !== (this.rear + 1) % this.capacity);
      console.log(str);
    }
  }
}
const myQueue = new CircularQueue(3);
console.log("Is the queue empty?", myQueue.isEmpty());
console.log("First element: ", myQueue.peek());
console.log("Size of queue: ", myQueue.size());
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.enqueue(15);
console.log("First element: ", myQueue.peek());