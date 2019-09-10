class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    if (this.values.length > 1) {
      let idx = this.values.length - 1;
      let element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element > parent) {
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
        } else {
          break;
        }
      }
    }
    return this.values;
  }

  extractMax() {
    let max = this.values[0];
    let min = this.values.pop();
    let idx = 0;
    if (this.values.length > 0) {
      this.values[0] = min;
    }
    //this sets the root value in the binary heap to the min, but if its the only value left we dont want to do that so we check that here.
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];
      if (
        (leftChild && rightChild && leftChild > rightChild) ||
        leftChild & !rightChild
      ) {
        if (leftChild > min) {
          this.values[leftChildIdx] = min;
          this.values[idx] = leftChild;
          idx = leftChildIdx;
        } else {
          break;
        }
      } else if (rightChild) {
        if (rightChild > min) {
          this.values[rightChildIdx] = min;
          this.values[idx] = rightChild;
          idx = rightChildIdx;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return max;
  }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(14);
maxHeap.insert(21);
maxHeap.insert(100);
maxHeap.insert(74);
maxHeap.insert(31);
maxHeap.insert(52);
maxHeap.insert(213);
maxHeap.insert(61);
maxHeap.insert(34);
maxHeap.insert(57);

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    if (this.values.length > 1) {
      let idx = this.values.length - 1;
      let element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element < parent) {
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
        } else {
          break;
        }
      }
    }
    return this.values;
  }

  extractMin() {
    let min = this.values[0];
    let max = this.values.pop();
    let idx = 0;
    if (this.values.length > 0) {
      this.values[0] = max;
    }
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if ((leftChild && leftChild < rightChild) || (leftChild && !rightChild)) {
        if (leftChild < max) {
          this.values[leftChildIdx] = max;
          this.values[idx] = leftChild;
          idx = leftChildIdx;
        } else {
          break;
        }
      } else if (rightChild) {
        if (rightChild < max) {
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

let minHeap = new MinBinaryHeap();
minHeap.insert(14);
minHeap.insert(21);
minHeap.insert(100);
minHeap.insert(74);
minHeap.insert(31);
minHeap.insert(52);
minHeap.insert(213);
minHeap.insert(61);
minHeap.insert(34);
minHeap.insert(57);
