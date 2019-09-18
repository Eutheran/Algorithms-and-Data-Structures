//this will be an undirected graph
class AdjacencyListGraph {
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

  //to make this graph directed we simply need to add 1 edge at a time instead of automatically connecting both vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
      }
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2].push(vertex1);
      }
    } else {
      console.log('Vertices are invalid');
    }
    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        vertex => vertex !== vertex2
      );

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        vertex => vertex !== vertex1
      );

      return this.adjacencyList;
    } else {
      console.log('Invalid Vertex');
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      if (this.adjacencyList[vertex].length > 0) {
        this.adjacencyList[vertex].forEach(innerVertex =>
          this.removeEdge(vertex, innerVertex)
        );
      }
      if (this.adjacencyList[vertex].length === 0) {
        delete this.adjacencyList[vertex];
      }
      return this.adjacencyList;
    } else {
      console.log('Invalid Vertex');
    }
  }

  depthFirstSearchRecursive(vertex) {
    const result = [];
    const visited = {};

    const depthFirstSearchHelper = vertex => {
      if (this.adjacencyList[vertex].length === 0) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(adjacentVertex => {
        if (!visited[adjacentVertex]) {
          depthFirstSearchHelper(adjacentVertex);
        }
      });
    };
    depthFirstSearchHelper(vertex);
    return result;
  }

  depthFirstSearchIterative(vertex) {
    const stack = [];
    const visited = {};
    const result = [];
    let curVertex;
    stack.push(vertex);
    visited[vertex] = true;
    while (stack.length > 0) {
      curVertex = stack.pop();
      result.push(curVertex);
      this.adjacencyList[curVertex].forEach(adjacentVertex => {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          stack.push(adjacentVertex);
        }
      });
    }
    return result;
  }

  breadthFirstSearchIterative(vertex) {
    const queue = [];
    const visited = {};
    const result = [];
    visited[vertex] = true;
    queue.push(vertex);
    let curVertex;
    while (queue.length > 0) {
      curVertex = queue.shift();
      result.push(curVertex);
      this.adjacencyList[curVertex].forEach(adjacentVertex => {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      });
    }
    return result;
  }
}

// let graph = new AdjacencyListGraph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');
// graph.depthFirstSearchRecursive('A');
// correct answer for recursive is ['A' , 'B', 'D', 'E', 'C', 'F']
// graph.depthFirstSearchIterative('A');
//correct answer for iterative is [ 'A', 'C', 'E', 'F', 'D', 'B'] because it goes down the right side of the graph to start rather than the left due to us popping last value off the stack where in recursive we solve with first value
