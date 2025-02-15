////////////             GRAPH DSA              //////////////


what is graph:

=>Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(V, E).


Components of Graph Data Structure

=>Vertices: Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabelled.

=>Edges: Edges are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labelled/unlabelled.

Types Of Graphs:

https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/

ChatGPT Link:

https://chatgpt.com/share/6724e0cf-5ff4-800b-a478-f3fbb6a3b354

1. Null Graph
A graph is known as a null graph if there are no edges in the graph.

2. Trivial Graph
Graph having only a single vertex, it is also the smallest graph possible.

3. Undirected Graph
A graph in which edges do not have any direction. That is the nodes are unordered pairs in the definition of every edge.

4. Directed Graph
A graph in which edge has direction. That is the nodes are ordered pairs in the definition of every edge.

5. Connected Graph
The graph in which from one node we can visit any other node in the graph is known as a connected graph.

6. Disconnected Graph
The graph in which at least one node is not reachable from a node is known as a disconnected graph.

7. Regular Graph
The graph in which the degree of every vertex is equal to K is called K regular graph.

8. Complete Graph
The graph in which from each node there is an edge to each other node

9. Cycle Graph
The graph in which the graph is a cycle in itself, the minimum value of degree of each vertex is 2. 

10. Cyclic Graph
A graph containing at least one cycle is known as a Cyclic graph.

11. Directed Acyclic Graph
A Directed Graph that does not contain any cycle. 


12. Bipartite Graph
A graph in which vertex can be divided into two sets such that vertex in each set does not contain any edge between them.



GRAPH ADD AND REMOVE AdjList:

//                         //

class GraphAdjList {
    constructor() {
        this.adjList = new Map(); // Adjacency List
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        this.adjList.delete(vertex);
        // Remove the vertex from the adjacency lists of other vertices
        for (let [key, adjVertices] of this.adjList) {
            this.adjList.set(key, adjVertices.filter(v => v !== vertex));
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1); // If undirected graph
        }
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.set(vertex1, this.adjList.get(vertex1).filter(v => v !== vertex2));
            this.adjList.set(vertex2, this.adjList.get(vertex2).filter(v => v !== vertex1)); // If undirected
        }
    }

    // Display the graph
    display() {
        for (let [vertex, edges] of this.adjList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}

// Example usage
const graphList = new GraphAdjList();
graphList.addVertex('A');
graphList.addVertex('B');
graphList.addVertex('C');
graphList.addEdge('A', 'B');
graphList.addEdge('A', 'C');
graphList.removeEdge('A', 'C');
graphList.removeVertex('B');
graphList.display();


//                        //


AdjMatrix:

//                        //

class GraphAdjMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0)); // Initialize matrix with 0s
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (vertex1 < this.size && vertex2 < this.size) {
            this.matrix[vertex1][vertex2] = 1;
            this.matrix[vertex2][vertex1] = 1; // For undirected graph
        }
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (vertex1 < this.size && vertex2 < this.size) {
            this.matrix[vertex1][vertex2] = 0;
            this.matrix[vertex2][vertex1] = 0; // For undirected graph
        }
    }

    // Display the matrix
    display() {
        for (let row of this.matrix) {
            console.log(row.join(' '));
        }
    }
}

// Example usage
const graphMatrix = new GraphAdjMatrix(3);
graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 2);
graphMatrix.removeEdge(0, 2);
graphMatrix.display();

//                        //


CODES:

// Null Graph //

class NullGraph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  display() {
    console.log("Null Graph: Vertices -", this.vertices, "Edges -", this.edges);
  }
}

const nullGraph = new NullGraph([1, 2, 3, 4, 5]);
nullGraph.display();


//           //

2.Trivial Graph:

//               //

class TrivialGraph {
  constructor() {
    this.vertices = [1];
    this.edges = [];
  }

  display() {
    console.log("Trivial Graph: Vertices -", this.vertices, "Edges -", this.edges);
  }
}

const trivialGraph = new TrivialGraph();
trivialGraph.display();

//                 //

3.Non-directed (Undirected) Graph

//             //

class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  display() {
    console.log("Undirected Graph: ", this.adjacencyList);
  }
}

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addEdge(1, 2);
undirectedGraph.addEdge(1, 3);
undirectedGraph.addEdge(2, 3);
undirectedGraph.display();


//             //


4.Directed Graph: 

//               //
class DirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    this.adjacencyList[v1].push(v2);
  }

  display() {
    console.log("Directed Graph: ", this.adjacencyList);
  }
}

const directedGraph = new DirectedGraph();
directedGraph.addEdge(1, 2);
directedGraph.addEdge(1, 3);
directedGraph.addEdge(2, 3);
directedGraph.display();


//               //


5.Connected Graph:

//             //


//               //



1.ADJMATRIX REP:

//                 //

/* function addEdge(mat, i, j) {
    mat[i][j] = 1; // Graph is 
    mat[j][i] = 1; // undirected
}

function displayMatrix(mat) {
    // Display the adjacency matrix
    for (const row of mat) {
        console.log(row.join(" ")); 
    }
}

// Main function to run the program
const V = 4; // Number of vertices

 // Initialize matrix
let mat = Array.from({ length: V }, () => Array(V).fill(0));

// Add edges to the graph
addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);

/* Optionally, initialize matrix directly
let mat = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
console.log("Adjacency Matrix:");
displayMatrix(mat); 
*/

function addEdge(mat,i,j){
    mat[i][j] = 1;

    mat[j][i] = 1;


}

function displayMatrix(mat){
    for(const row of mat){
        console.log(row.join(" || "));
        
    }
}

const v= 4;

let mat = Array.from({length:v} , () => Array(v).fill(0));

addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);



console.log("Adjacency Matrix:");
displayMatrix(mat); 

//                   //


2.ADJLIST REP:


//                //

class Graph {
    constructor() {
        this.adjList = {}; // Adjacency list with sets for neighbors
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set(); // Initialize an empty set for the vertex
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].add(vertex2); // Use .add() to add to the set
            this.adjList[vertex2].add(vertex1); // For undirected graph
        } else {
            console.log("One or both vertices do not exist.");
        }
    }

    // Print the graph
    printGraph() {
        for (let vertex in this.adjList) {
            console.log(`${vertex} -> ${[...this.adjList[vertex]].join(", ")}`);
        }
    }
}

// Example Usage:
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

// Print the graph
console.log("Graph:");
graph.printGraph();

//               //



3.BFS:

///                ///

class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1,vertex2){
        if(this.adjList[vertex1]  && this.adjList[vertex2]){
            this.adjList[vertex1].push(vertex2);
            this.adjList[vertex2].push(vertex1);
        }
    }

    bfs(startVertex){

        const visited = new Set();

        const results = [];

        const bfsHelper = (vertex) => {
            if(!vertex) return;
            visited.add(vertex);
            results.push(vertex);

            for(let neighbor of this.adjList[vertex]){
                if(!visited.has(neighbor)){
                    bfsHelper(neighbor);
                }
            }
        };

        bfsHelper(startVertex);
        console.log("yes this the BFS:", results);

    }
}

const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Perform DFS from vertex "A"
graph.bfs("A");

//                    //

//           USING MATRIX     //
function bfs(matrix, start) {
    const visited = new Array(matrix.length).fill(false); // Track visited vertices
    const queue = [start]; // Queue for BFS
    const result = []; // Store BFS traversal order

    visited[start] = true; // Mark start vertex as visited

    while (queue.length > 0) {
        const current = queue.shift(); // Dequeue vertex
        result.push(current); // Add to result

        // Explore neighbors
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[current][i] === 1 && !visited[i]) {
                queue.push(i); // Enqueue unvisited neighbor
                visited[i] = true; // Mark as visited
            }
        }
    }

    console.log("BFS Traversal:", result);
}

// Example Usage
const matrix = [
    [0, 1, 1, 0], // Adjacency matrix
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];

bfs(matrix, 0); // Start BFS from vertex 0 (A)


//                               //


///                 ///


4.DFS:

///                 ///

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].push(vertex2);
            this.adjList[vertex2].push(vertex1);
        }
    }

    dfsIterative(startVertex) {
        const visited = new Set();
        const stack = [startVertex];
        const result = [];

        while (stack.length > 0) {
            const vertex = stack.pop();

            if (!visited.has(vertex)) {
                visited.add(vertex); // Mark as visited
                result.push(vertex); // Add to result

                // Push all unvisited neighbors onto the stack
                for (let neighbor of this.adjList[vertex]) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }

        console.log("DFS Traversal (Iterative):", result);
    }
}

// Example Usage
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
graph.addEdge("D", "E");

graph.dfsIterative("A");


///         USING MATRIX                       //

function dfs(matrix, start, visited = [], result = []) {
    if (!visited[start]) {
        visited[start] = true; // Mark vertex as visited
        result.push(start); // Add to result

        // Explore neighbors
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[start][i] === 1 && !visited[i]) {
                dfs(matrix, i, visited, result); // Recursive call
            }
        }
    }
    return result;
}

// Example Usage
const matrix = [
    [0, 1, 1, 0], // Adjacency matrix
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];

const result = dfs(matrix, 0, new Array(matrix.length).fill(false));
console.log("DFS Traversal:", result);


//                                       //

///                ///


4.floodFill:

 function floodFill(image, sr, sc, newColor) {
    const rows = image.length;
    const cols = image[0].length;
    const initialColor = image[sr][sc];

    // If the starting cell is already the new color, return the image as is.
    if (initialColor === newColor) return image;

    // Helper function for DFS
    function dfs(r, c) {
        // Base case: Check boundaries and color.
        if (r < 0 || c < 0 || r >= rows || c >= cols || image[r][c] !== initialColor) {
            return;
        }

        // Change the color of the current cell.
        image[r][c] = newColor;

        // Explore neighbors (up, down, left, right).
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    // Start DFS from the starting cell.
    dfs(sr, sc);

    return image;
}
const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
const sr = 1; // Start row
const sc = 1; // Start column
const newColor = 2;

const result = floodFill(image, sr, sc, newColor);
console.log(result);
 */

///             //


5.snakes and ladders

function snakeAndLadder(board, ladders, snakes) {
    const n = board.length; // Number of cells on the board
    const visited = new Array(n).fill(false); // To track visited cells

    // Queue for BFS: stores [current cell, number of rolls]
    const queue = [[1, 0]]; // Start at cell 1 with 0 rolls
    visited[1] = true;

    while (queue.length > 0) {
        const [current, rolls] = queue.shift();

        // If we reach the last cell, return the number of rolls
        if (current === n - 1) return rolls;

        // Explore all possible dice rolls (1 to 6)
        for (let dice = 1; dice <= 6; dice++) {
            let next = current + dice;

            // If the move is beyond the board, ignore it
            if (next >= n) continue;

            // Check for ladders or snakes
            if (ladders[next]) next = ladders[next]; // Ladder jump
            if (snakes[next]) next = snakes[next];  // Snake drop

            // If the cell is not visited, add it to the queue
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, rolls + 1]);
            }
        }
    }

    // If no path exists (shouldn't happen with a valid board), return -1
    return -1;
}

// Example Usage
const n = 31; // Total cells (1 to 30)
const board = Array(n).fill(0); // Board representation (1-indexed)

// Ladders: Start → End
const ladders = {
    3: 22
};

// Snakes: Start → End
const snakes = {}; // No snakes in this example

// Find the minimum rolls to reach the last cell
const result = snakeAndLadder(board, ladders, snakes);
console.log("Minimum rolls to reach cell 30:", result);
///                 //

6.water jug:

function waterJugProblem(jug1Capacity, jug2Capacity, target) {
    const queue = [[0, 0, 0]]; // [jug1, jug2, steps]
    const visited = new Set(); // To track visited states

    while (queue.length > 0) {
        const [jug1, jug2, steps] = queue.shift();

        // If either jug has the target amount
        if (jug1 === target || jug2 === target) {
            return steps;
        }

        // Mark current state as visited
        const state = `${jug1},${jug2}`;
        if (visited.has(state)) {
            continue;
        }
        visited.add(state);

        // Add all possible states to the queue
        queue.push([jug1Capacity, jug2, steps + 1]); // Fill Jug1
        queue.push([jug1, jug2Capacity, steps + 1]); // Fill Jug2
        queue.push([0, jug2, steps + 1]); // Empty Jug1
        queue.push([jug1, 0, steps + 1]); // Empty Jug2

        // Pour from Jug1 to Jug2
        const pourToJug2 = Math.min(jug1, jug2Capacity - jug2);
        queue.push([jug1 - pourToJug2, jug2 + pourToJug2, steps + 1]);

        // Pour from Jug2 to Jug1
        const pourToJug1 = Math.min(jug2, jug1Capacity - jug1);
        queue.push([jug1 + pourToJug1, jug2 - pourToJug1, steps + 1]);
    }

    return -1; // If no solution is found
}

// Example Usage:
const jug1Capacity = 3; // 3-liter jug
const jug2Capacity = 5; // 5-liter jug
const target = 4; // Target amount in one of the jugs
const result = waterJugProblem(jug1Capacity, jug2Capacity, target);
console.log("Steps to reach the target:", result);
//                     //

7.clone undireacted graph:

/* class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

function cloneGraph(node) {
    if (!node) return null;

    // Map to store the original node -> cloned node mapping
    const nodeMap = new Map();

    // BFS Queue
    const queue = [node];
    nodeMap.set(node, new GraphNode(node.value));

    while (queue.length > 0) {
        const current = queue.shift();

        // Traverse neighbors
        for (let neighbor of current.neighbors) {
            // Clone the neighbor if it hasn't been cloned
            if (!nodeMap.has(neighbor)) {
                nodeMap.set(neighbor, new GraphNode(neighbor.value));
                queue.push(neighbor);
            }
            // Link the clone of the neighbor to the current node's clone
            nodeMap.get(current).neighbors.push(nodeMap.get(neighbor));
        }
    }

    // Return the clone of the starting node
    return nodeMap.get(node);
}

// Helper function to print a graph
function printGraph(node) {
    const visited = new Set();
    const queue = [node];
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();

        if (visited.has(current.value)) continue;
        visited.add(current.value);

        const neighbors = current.neighbors.map(n => n.value);
        result.push(`${current.value}: [${neighbors.join(", ")}]`);

        for (let neighbor of current.neighbors) {
            if (!visited.has(neighbor.value)) {
                queue.push(neighbor);
            }
        }
    }

    console.log(result.join("\n"));
}

// Example usage

// Step 1: Create the original graph
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

console.log("Original Graph:");
printGraph(node1);

// Step 2: Clone the graph
const clonedNode1 = cloneGraph(node1);

console.log("\nCloned Graph:");
printGraph(clonedNode1);
//                   //
