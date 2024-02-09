class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if (this.items.length === 0) {
      return "stack underflow - empty";
    } else {
      this.items.pop();
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
const stack = new Stack();
stack.push(5);
stack.push(7);
stack.push(6);
stack.push(6);
stack.pop();
console.log(stack.peek());
console.log(stack.print());
