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
    return min;
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

  dijkstraShortestPath(start, finish) {
    const previous = {};
    const distances = {};
    let smallest;
    const shortestPath = [];
    const priorityQueue = new PriorityQueue();

    //set up initial state
    for (let vertex in this.adjacencyList) {
      if (start === vertex) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //while queue is not empty
    while (priorityQueue.values.length > 0) {
      smallest = priorityQueue.dequeue().value;
      if (smallest === finish) {
        //while a node exists on the path, eventually our START variable will set this value to NULL;
        while (smallest) {
          //we push each node along the way into our results array
          shortestPath.push(smallest);
          //we set smallest to the previous node until we hit START
          smallest = previous[smallest];
        }
        //get out of our original loop, we're done
        break;
      }
      //if smallest exists or isnt infinity
      if (smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(adjacentNodeObj => {
          //get nodes name
          let adjacentNode = adjacentNodeObj.node;
          //get nodes distance
          let nodeDistance = adjacentNodeObj.weight;
          //add the previous distance to our new nodes distance
          let candidateRoute = distances[smallest] + nodeDistance;
          //if our route to this node is shorter
          if (candidateRoute < distances[adjacentNode]) {
            //update the distance to the shorter route
            distances[adjacentNode] = candidateRoute;
            //update previous - how we got here from shortest path
            previous[adjacentNode] = smallest;
            //enqueue the adjacentNode and its total distance
            priorityQueue.enqueue(adjacentNode, nodeDistance);
          }
        });
      }
    }
    return shortestPath.reverse();
  }
}

let graph = new WeightedListGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('F', 'E', 1);

graph.dijkstraShortestPath('A', 'E');
//should return ['A', 'C', 'D', 'F', 'E']
