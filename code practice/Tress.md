                                  TRESS DSA                         

Definition:

=>Trees are a widely used data structure that simulate a hierarchical tree structure with a set of linked nodes.


Explain:

1.A Tree is a collection of nodes connected by edges.
2.It is a non-linear data structure, meaning data is not arranged sequentially.
3.Root Node: The topmost node in the tree (the starting point).
4.Leaf Nodes: Nodes that do not have any children.
5.Edge: The link between two nodes (parent and child).


Key Terminology:

1.Node: A single element of the tree that stores data.
2.Parent: A node that has child nodes.
3.Child: A node that descends from another node.
4.Siblings: Nodes that share the same parent.
5.Height: The length of the longest path from the root to any leaf node.
6.Depth: The length of the path from the root to a node.
7.Subtree: A tree formed from a node and its descendants.



TRESS TYPES:


1.Binary Tree
2.Ternary tree
3.N-ary Tree
4.AVL Tree
5.Red-Black Tree
6.B-Tree
7.Segment Tree



Tree Traversal:


Tree traversal refers to visiting all nodes in a tree in a specific order. There are two main types:



=>In-order: Traverse the left subtree, visit the root, then traverse the right subtree.
Example: Left -> Root -> Right

=>Pre-order: Visit the root, traverse the left subtree, then traverse the right subtree.
Example: Root -> Left -> Right

=>Post-order: Traverse the left subtree, traverse the right subtree, then visit the root.
Example: Left -> Right -> Root



1.BINARY TREE:

A Binary Tree is a tree data structure in which each node has at most two children. These children are referred to as the left child and the right child.


TYPES:

1.Full Binary Tree:
=> Every node has 0 or 2 children.

     1
   /   \
  2     3



2.Complete Binary Tree: 
=>All levels are completely filled except possibly the last, which is filled from left to right.

     1
   /   \
  2     3
 / \   /
4   5 6


3.Perfect Binary Tree:
=> All internal nodes have exactly two children, and all leaf nodes are at the same level.

     1
   /   \
  2     3
 / \   / \
4   5 6   7


4.Balanced Binary Tree: 
=>A tree where the difference in height between the left and right subtrees of every node is no more than 1.

        5
      /   \
     3     8
    / \   / \
   1   4 6   9


5.Degenerate (or Skewed) Binary Tree: 
=> A tree where each node has only one child, either left or right. This essentially behaves like a linked list.

1
 \
  2
   \
    3






      
problems:


1.Heights of the Tree:

/* // JavaScript program to find the height of a binary 
// tree using depth-first search (DFS) approach.
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


// Returns height which is the number of edges
// along the longest path from the root node down 
// to the farthest leaf node.
function height(root) {
    if (root === null) {
        return -1;
    }

    // compute the height of left and right subtrees
    let lHeight = height(root.left);
    let rHeight = height(root.right);

    return Math.max(lHeight, rHeight) + 1;
}

// Representation of the input tree:
//     1
//    / \
//   2   3
//  / \
// 4   5
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(height(root)); */

2.Identical tree:

/* // Javascript program to see if two trees are identical
// using DFS
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

// Function to check if two trees are identical
function isIdentical(r1, r2) {

    // If both trees are empty, they are identical
    if (r1 === null && r2 === null)
        return true;

    // If only one tree is empty, they are not identical
    if (r1 === null || r2 === null)
        return false;

    // Check if the root data is the same and
    // recursively check for the left and right subtrees
    return (r1.data === r2.data &&
            isIdentical(r1.left, r2.left) &&
            isIdentical(r1.right, r2.right));
}

// Representation of input binary tree 1
//        1
//       / \
//      2   3
//     /
//    4
let r1 = new Node(1);
r1.left = new Node(2);
r1.right = new Node(3);
r1.left.left = new Node(4);

// Representation of input binary tree 2
//        1
//       / \
//      2   3
//     /
//    4
let r2 = new Node(1);
r2.left = new Node(3);
r2.right = new Node(3);
r2.left.left = new Node(4);

if (isIdentical(r1, r2)) {
    console.log("Yes");
} 
else {
    console.log("No");
} */


3.


