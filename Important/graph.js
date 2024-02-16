class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.vertices.push(vertex);
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  bfs(startingVertex) {
    const visited = {};
    const queue = [];
    queue.push(startingVertex);
    visited[startingVertex] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex);
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(startingVertex) {
    const visited = {};
    this._dfsHelper(startingVertex, visited);
  }

  _dfsHelper(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    const neighbors = this.adjacencyList.get(vertex);
    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        this._dfsHelper(neighbor, visited);
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("BFS traversal:");
graph.bfs("A"); // Output: A, B, C, D, E
console.log("DFS traversal:");
graph.dfs("A"); // Output: A, B, D, C, E


// Example usage:
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("BFS traversal:");
graph.bfs("A"); // Output: A, B, C, D, E
console.log("DFS traversal:");
graph.dfs("A");