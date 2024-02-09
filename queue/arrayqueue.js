class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "stack underflow - empty";
    } else {
      this.items.shift();
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "no items";
    } else {
      return this.items[0];
    }
  }
  print() {
    return this.items;
  }
}
const stack = new Queue();
stack.enqueue(5);
stack.enqueue(7);
stack.enqueue(6);
stack.enqueue(6);
stack.dequeue();
console.log(stack.peek());
console.log(stack.print());
