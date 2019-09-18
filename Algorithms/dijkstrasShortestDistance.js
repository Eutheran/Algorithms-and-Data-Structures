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
    while (true) {
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
    return this.values;
  }
}

class WeightedListGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    } else {
      console.log('Vertice already exists');
    }
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    } else {
      console.log('Vertices are invalid');
    }
    return this.adjacencyList;
  }
}

let graph = new WeightedListGraph();
