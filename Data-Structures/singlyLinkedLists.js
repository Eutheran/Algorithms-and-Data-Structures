class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return false;
    let curNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return curNode;
    }
    let newTail = null;
    while (curNode.next) {
      newTail = curNode;
      curNode = curNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return curNode;
  }

  shift() {
    if (!this.head) return false;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    } else {
      this.head = this.head.next;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }

  unshift(value) {
    let newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      //must use else statement here or the head will point its .next value back to itself and become circular logic
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) {
      return null;
    }
    let count = 0;
    let curNode = this.head;
    while (count !== idx) {
      curNode = curNode.next;
      count++;
    }
    return curNode;
  }

  setValue(idx, value) {
    let curNode = this.get(idx);
    if (!curNode) {
      return false;
    } else {
      curNode.value = value;
      return true;
    }
  }

  insert(idx, value) {
    if (idx > this.length || idx < 0) {
      return false;
    }
    let newNode = new Node(value);

    if (idx === 0) {
      return !!this.unshift(value);
    } else if (idx === this.length) {
      return !!this.push(value);
    } else {
      let oldNode = this.get(idx - 1);
      newNode.next = oldNode.next;
      oldNode.next = newNode;
      return oldNode;
    }
  }

  remove(idx) {
    if (idx >= this.length || idx < 0) return false;
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let prevNode = this.get(idx - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      removedNode.next = null;
      this.length--;
      return removedNode;
    }
  }

  reverse() {
    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;
    let prevNode = null;
    //has to be null so that tail.next = null
    let nextNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = curNode.next;
      //just holds the position of the next node over while we swap prevNode
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
