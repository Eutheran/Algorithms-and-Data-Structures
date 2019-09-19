class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length > 1) {
      let idx = this.values.length - 1;
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parentNode = this.values[parentIdx];
        if (newNode.priority < parentNode.priority) {
          this.values[parentIdx] = newNode;
          this.values[idx] = parentNode;
          idx = parentIdx;
        } else {
          break;
        }
      }
    }
    return this.values;
  }

  dequeue() {
    let min = this.values[0];
    let max = this.values.pop();
    let idx = 0;
    if (this.values.length > 0) {
      this.values[0] = max;
    }
    while (idx < this.values.length - 1) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (
        (leftChild && rightChild && leftChild.priority < rightChild.priority) ||
        (!rightChild && leftChild)
      ) {
        if (leftChild.priority < max.priority) {
          this.values[leftChildIdx] = max;
          this.values[idx] = leftChild;
          idx = leftChildIdx;
        } else {
          break;
        }
      } else if (rightChild) {
        if (rightChild.priority < max.priority) {
          this.values[rightChildIdx] = max;
          this.values[idx] = rightChild;
          idx = rightChildIdx;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return min;
  }
}

let pQ = new PriorityQueue();
pQ.enqueue('dog bite', 4);
pQ.enqueue('knife cut', 7);
pQ.enqueue('broken leg', 2);
pQ.enqueue('sprained ankle', 8);
pQ.enqueue('broken hip', 1);
pQ.enqueue('migrane', 9);
pQ.enqueue('rusty nail puncture', 6);
