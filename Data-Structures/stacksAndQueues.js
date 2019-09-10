class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
    //this allows us to increment and return the stack size in ONE line instead of TWO
  }

  pop() {
    if (this.size === 0) return false;
    let poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
      poppedNode.next = null;
    }
    this.size--;
    return poppedNode.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return false;
    let dequeuedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeuedNode.next;
      dequeuedNode.next = null;
    }
    this.size--;
    return dequeuedNode.value;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
