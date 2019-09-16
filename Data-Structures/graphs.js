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
}

let graph = new AdjacencyListGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
