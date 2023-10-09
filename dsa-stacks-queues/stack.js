class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.first) {
      throw new Error("Stack is empty");
    }

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (this.size === 0) {
      this.last = null;
    }

    return removedNode.val;
  }

  peek() {
    if (!this.first) {
      return null;
    }

    return this.first.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
