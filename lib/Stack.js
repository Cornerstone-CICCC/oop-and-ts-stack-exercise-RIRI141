class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  printStack() {
    let message = "";
    for (let i = this.items.length - 1; i >= 0; i--) {
      message += `\r\n[${i}] - ${this.items[i]}`;
    }
    return message;
  }
}

module.exports = Stack;
