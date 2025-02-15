///                                           ////

//REACT JS INTERVIEW QA:

//https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react

// https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#table-of-contents

///                        ///

// https://www.geeksforgeeks.org/top-50-interview-problems-on-recursion-algorithm/

// 150 leetcode link:

// https://leetcode.com/studyplan/top-interview-150/

// chatgpt link:


// https://chatgpt.com/share/672e0b66-bedc-800b-b46a-bdc66be349e0

//                                 //

// 1.Flood Fill Algorithm:



/* function floodFill(img,x,y,newClr){
	let oldImg = img[x][y];

	if(oldImg === newClr){
		return img;
	}

	function dfs(img,x,y,oldImg,newClr){
		if(x < 0 || y < 0  || x >= img.length || y >= img[0].length || img[x][y] != oldImg){
			return ;
		}
		img[x][y] = newClr;

		dfs(img,x+1,y,oldImg,newClr);
		dfs(img,x-1,y,oldImg,newClr);
		dfs(img,x,y+1,oldImg,newClr);
		dfs(img,x,y-1,oldImg,newClr);
	}

	dfs(img,x,y,oldImg,newClr);
	return img;
}

let img = [ 
    [1, 1, 1], 
    [1, 1, 0], 
    [1, 0, 1]
];
let x = 1, y = 1, newClr = 3;

// Apply flood fill
let filledImg = floodFill(img, x, y, newClr);

// Print the result
console.log(filledImg);

// op
0:(3) [3, 3, 3]
1: (3) [3, 3, 0]
2: (3) [3, 0, 1]
length: 3 */

///                      ///


//2.Recursively remove all adjacent duplicates:


/* function removeAdjacentDuplicates(s) {
    let result = ''; // Initialize an empty string to store the result.

    for (let i = 0; i < s.length; i++) {
        // If the result string is empty or the current character is not the same as the last character in result
        if (result.length === 0 || result[result.length - 1] !== s[i]) {
            result += s[i]; // Add the current character to result.
        } else {
            // If the last character in result is the same as the current character, do nothing.
        }
    }

    return result; // Return the modified string without adjacent duplicates.
}

// Example usage
let input = " newwss";
let output = removeAdjacentDuplicates(input);
console.log(output); // Output: "news"
 */


///                          ///


//3.Program for Tower of Hanoi Algorithm:


/* function towerOfHanoi(n, sender, receiver, server) {
    // Base case: Only one disk to move
    if (n === 1) {
        console.log(`Move disk 1 from ${sender} to ${receiver}`);
        return;
    }

    // Recursive case: Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, sender, server, receiver);

    // Move the nth disk from source to destination
    console.log(`Move disk ${n} from ${sender} to ${receiver}`);

    // Move the n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, server, receiver, sender);
}

// Example usage
let n = 3; // Number of disks
towerOfHanoi(n, 'deva', 'jeeva', 'gopi');

/* Move disk 1 from deva to jeeva
 Move disk 2 from deva to gopi
 Move disk 1 from jeeva to gopi
 Move disk 3 from deva to jeeva
Move disk 1 from gopi to deva
 Move disk 2 from gopi to jeeva
 Move disk 1 from deva to jeeva
  */
 

//4.Program to calculate value of nCr using Recursion:

/* function total(n,r){
	if(r === 0 || r === n){
		return 1;
	}
	return total(n-1,r-1) + total(n-1,r);

}

let n = 6;  
let r = 3;
console.log(`total(${n},${r}) = ${total(n,r)}`);  //op : 10 */



//     ///



//5.Find geometric sum of the series using recursion:


/* function geometricSum(n) {
    // Base case: if n is 0, return 1 (since the first term is 1)
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: 1 + (1/2) * geometricSum(n-1)
    return 1 / Math.pow(3, n) + geometricSum(n - 1);
	
}

// Example usage:
let n = 5;
console.log(geometricSum(n));  // Output: 1.4979423868312758
 */


// 6.Convert a String to an Integer using Recursion:


/* function stringToInt(str) {
    // Base case: if the string has only one character, return its integer equivalent
    if (str.length === 1) {
        return str.charCodeAt(0) - '0'.charCodeAt(0);
    }

    // Recursive case: convert first character to integer, multiply by the appropriate power of 10,
    // and recursively process the rest of the string
    let firstDigit = str.charCodeAt(0) - '0'.charCodeAt(0);
    
    // Length of the remaining string
    let lengthOfRest = str.length - 1;

    // Return the first digit times 10^(lengthOfRest) plus the recursive result of the rest of the string
    return firstDigit * Math.pow(10, lengthOfRest) + stringToInt(str.slice(1));
}

// Example usage:
let str = "123456";
console.log(stringToInt(str));  // Output: 1234
 */



//7.DFS Traversal of Tree:


/* // Define a TreeNode class for binary tree nodes
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Inorder Traversal (Left, Root, Right)
function inorder(root) {
    if (root === null) {
        return [];
    }
    // Traverse left subtree, then root, then right subtree
    return [...inorder(root.left), root.val, ...inorder(root.right)];
}

// Preorder Traversal (Root, Left, Right)
function preorder(root) {
    if (root === null) {
        return [];
    }
    // Traverse root, then left subtree, then right subtree
    return [root.val, ...preorder(root.left), ...preorder(root.right)];
}

// Postorder Traversal (Left, Right, Root)
function postorder(root) {
    if (root === null) {
        return [];
    }
    // Traverse left subtree, then right subtree, then root
    return [...postorder(root.left), ...postorder(root.right), root.val];
}

// Example Tree Construction based on the given traversals:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test the traversal functions
console.log("Inorder Traversal:", inorder(root));  // Output: [4, 2, 5, 1, 3]
console.log("Preorder Traversal:", preorder(root));  // Output: [1, 2, 4, 5, 3]
console.log("Postorder Traversal:", postorder(root));  // Output: [4, 5, 2, 3, 1]
 */


//8.Bottom View of a Binary Tree using Recursion:


/* class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Helper function to perform the bottom view traversal
function bottomViewUtil(root, hd, level, map) {
    if (root === null) {
        return;
    }

    // If there is no entry for this horizontal distance or the current level is deeper
    // than the level already stored for this horizontal distance, update the map.
    if (!map.has(hd) || level >= map.get(hd).level) {
        map.set(hd, { node: root.val, level: level });
    }

    // Recur for left and right subtrees with updated horizontal distance and level
    bottomViewUtil(root.left, hd - 1, level + 1, map);
    bottomViewUtil(root.right, hd + 1, level + 1, map);
}

// Function to return the bottom view of the tree
function bottomView(root) {
    // Map to store the bottom-most node at each horizontal distance
    let map = new Map();
    
    // Start recursion from the root, with horizontal distance 0 and level 0
    bottomViewUtil(root, 0, 0, map);
    
    // Sort the map by horizontal distance (keys) and extract the values
    let result = [];
    for (let [key, value] of [...map].sort((a, b) => a[0] - b[0])) {
        result.push(value.node);
    }
    
    return result;
}

// Example Usage:

// Constructing the following tree:
//        1
//      /   \
//     2     3
//    / \   /
//   4   5 6
// Output Bottom View: [4, 2, 5, 3, 6]
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

// Get the bottom view of the tree
console.log(bottomView(root));  // Output: [4, 2, 5, 3, 6]
 */


//9.Print all possible paths from top left to bottom right in matrix:



/* function printAllPaths(matrix, row, col, path) {
    let rows = matrix.length;       // Total number of rows
    let cols = matrix[0].length;    // Total number of columns

    // Base Case: When you reach the bottom-right corner
    if (row === rows - 1 && col === cols - 1) {
        path.push(matrix[row][col]);  // Add the last element (bottom-right)
        console.log(path.join(' => ')); // Print the current path
        path.pop();  // Backtrack
        return;  // End recursion
    }

    // Add the current element to the path
    path.push(matrix[row][col]);

    // Recursive Case 1: Move Down (if within bounds)
    if (row < rows - 1) {
        printAllPaths(matrix, row + 1, col, path);
    }

    // Recursive Case 2: Move Right (if within bounds)
    if (col < cols - 1) {
        printAllPaths(matrix, row, col + 1, path);
    }

    // Backtrack: Remove the current element from the path
    path.pop();
}

// Wrapper function to initialize the process
function findAllPaths(matrix) {
    if (matrix.length === 0) return;  // Handle empty matrix
    let path = [];
    printAllPaths(matrix, 0, 0, path);  // Start from the top-left corner
}

// Example matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Call the wrapper function to find all paths
findAllPaths(matrix); */


//10.Print all combinations of balanced parentheses:


/* function generateParentheses(n) {
    let result = [];

    // Helper function to build parentheses
    function backtrack(openCount, closeCount, currentString) {
        // Base Case: When the current string is a valid combination
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // Add opening parenthesis if we have remaining
        if (openCount < n) {
            backtrack(openCount + 1, closeCount, currentString + "(");
        }

        // Add closing parenthesis if it maintains the balance
        if (closeCount < openCount) {
            backtrack(openCount, closeCount + 1, currentString + ")");
        }
    }

    // Start the recursion with 0 open and close parentheses
    backtrack(0, 0, "");
    
    return result;
}

// Example usage:
let n = 3; // Number of pairs of parentheses
console.log(generateParentheses(n));
 */




//11.Print Right View of a Binary Tree:

/* class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }


}


function rightViewDFS(root){
    let result = [];

    function dfs(node,level){
        if(!node) return;

        if(level  === result.length){
            result.push(node.val);
        }

        dfs(node.right,level +1);
        dfs(node.left,level+1);

    }
    dfs(root,0);
    return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right  = new Node(5);
root.right.right = new Node(6);

console.log(rightViewDFS(root));



       1
     /   \
    2     3
   / \     \
  4   5     6
 */



  //12.Find the value of a number raised to its reverse:


  /* function reverseNumber(num){
    return parseInt(num.toString().split('').reverse().join(''),10);

}

function powerOfReverse(N){
    let reverseN = reverseNumber(N);

    return Math.pow(N,reverseN);
}

let N = 8;
console.log(powerOfReverse(N));   // 16777216
 */


//13.sort the stack value:


/* function sortStack(stack) {
    // Base case: if stack is empty, return
    if (stack.length === 0) {
        return;
    }

    // Step 1: Pop the top element from the stack
    let top = stack.pop();

    // Step 2: Recursively sort the remaining stack
    sortStack(stack);

    // Step 3: Insert the popped element back into the sorted stack
    insertSorted(stack, top);
}

function insertSorted(stack, element) {
    // If stack is empty or element is greater than the top, push it to the stack
    if (stack.length === 0 || element > stack[stack.length - 1]) {
        stack.push(element);
        return;
    }

    // Otherwise, pop the top element, recursively insert the element, and push the popped element back
    let top = stack.pop();
    insertSorted(stack, element);
    stack.push(top);
}

// Test the function
let stack = [-3, 14, 18, -5, 30];
sortStack(stack);
console.log("Sorted Stack: ", stack);  // Output: [30, 18, 14, -3, -5]
 */



//14.How to check if a given array represents a Binary Heap?:

/* function isHeap(arr) {
    let n = arr.length;  // Length of the array

    // Iterate over all internal nodes (non-leaf nodes)
    for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
        // Left child of arr[i] is at index 2*i + 1
        let left = 2 * i + 1;
        // Right child of arr[i] is at index 2*i + 2
        let right = 2 * i + 2;

        // If left child exists and arr[i] is smaller than the left child, return false
        if (left < n && arr[i] < arr[left]) {
            return false;
        }

        // If right child exists and arr[i] is smaller than the right child, return false
        if (right < n && arr[i] < arr[right]) {
            return false;
        }
    }

    // If all internal nodes satisfy the heap property, return true
    return true;
}
let arr = [90, 15, 10, 7, 12, 2];

if (isHeap(arr)) {
    console.log("The array represents a max heap.");
} else {
    console.log("The array does not represent a max heap.");
} */



    //15.Iterative HeapSort


/* // Function to heapify a subtree with root at given index 'i'
function heapify(arr, n, i) {
    let largest = i;  // Initialize largest as root
    let left = 2 * i + 1;  // Left child
    let right = 2 * i + 2;  // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap it with the largest element and heapify the affected subtree
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];  // Swap
        heapify(arr, n, largest);  // Recursively heapify the affected subtree
    }
}

// Iterative HeapSort function
function heapSort(arr) {
    let n = arr.length;

    // Build a max heap (rearrange array)
    // Start from the first non-leaf node and heapify each node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (largest element) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// Example usage:
let arr = [10, 20, 15, 17, 9, 21];
heapSort(arr);
console.log("Sorted array:", arr);
 */


//16.Print K largest(or smallest) elements in an array:


/* function largest(arr,k){
    
    
    arr.sort((a,b) => b-a);


    return arr.slice(0,k);




}

let arr = [10, 4, 3, 50, 23, 90];
let k = 3;
console.log(largest(arr));
console.log(largest(arr, k)); */



//17.Height of a complete binary tree (or Heap) with N nodes:


/* function no(N){
    return Math.floor(Math.log2(N));
}

let N = 6;
console.log(no(N));  //op: 2
 */


//18.Heap Sort for decreasing order using min heap:


/* function minHeap(arr, n, i) {
    let smallest = i; // Initialize the smallest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child

    // If the left child is smaller than the root
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    // If the right child is smaller than the smallest so far
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    // If the smallest is not the root, swap and heapify
    if (smallest != i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap
        minHeap(arr, n, smallest); // Recursively heapify the affected subtree
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build the min heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeap(arr, n, i);
    }

    // One by one extract elements from the heap
    for (let i = n - 1; i >= 0; i--) {
        // Move the current root (smallest element) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call minHeap on the reduced heap
        minHeap(arr, i, 0);
    }

    // Reverse the array to get a decreasing order
    arr.reverse();
}

let arr = [5, 3, 10, 1];
heapSort(arr); // Call heapSort to sort the array
console.log("Sorted array in decreasing order:", arr);
 */

//20.Sort a nearly sorted (or K sorted) array:

/* function kSortedArray(arr, K) {
    let n = arr.length;
    
    // Start from the K-th element and insert it into the sorted part of the array
    for (let i = K; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements of the sorted part of the array to make room for current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current element into the correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage:
let arr = [6, 5, 3, 2, 8, 10, 9];
let K = 3;
console.log(kSortedArray(arr, K));  // Output: [2, 3, 5, 6, 8, 9, 10]
 */

//21.K’th Smallest Element in Unsorted Array:


/* function KSmall(arr,k){

    arr.sort((a,b) => a-b);

    return arr[k-1];
}

let arr = [23,1,2,5,7,12];
let k = 4
console.log(KSmall(arr,k)); //op: 7
 */

//22.Fractional Knapsack Problem:
/* class Item{
    constructor(value,weight){
        this.value = value;
        this.weight = weight;



    }
}


function knapSnack(capacity,items){
    items.sort((a,b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;


    for(let item of items){
        if(capacity >= item.weight){
            totalValue += item.value;
            capacity -= item.weight;
        }else{
            let fraction = capacity / item.weight;
            totalValue += item.value * fraction;
            break;
        }
    }

    return totalValue;
}

let capacity = 50;

let items = [
    new Item(60, 10),
    new Item(100, 20),
    new Item(120, 30)
];

let maxValue = knapSnack(capacity,items);
console.log(`SO THE TOTAL CAPPACITY OF THE : ${maxValue}`);
 */

//23.Minimum cost to make array size 1 by removing larger of pairs:




/* // function to calculate the minimum cost
function cost(a) {
    // Minimum cost is (size - 1) multiplied with minimum element.
    const n = a.length;
    return (n - 1) * Math.min(...a);
}

const a = [4, 3, 2];
console.log(cost(a));
 */


//24.Minimum rotations to unlock a circular lock:


/* function minRotationsToUnlock(currentCode, unlockCode) {
    let totalRotations = 0;

    // Loop through each digit of the codes
    for (let i = 0; i < currentCode.length; i++) {
        let currentDigit = parseInt(currentCode[i]);
        let unlockDigit = parseInt(unlockCode[i]);

        // Calculate forward and backward rotations
        let forwardRotation = Math.abs(currentDigit - unlockDigit);
        let backwardRotation = 10 - forwardRotation;

        // Add the minimum of the two rotations to total
        totalRotations += Math.min(forwardRotation, backwardRotation);
    }

    return totalRotations;
}

// Example usage
let currentCode = "2345";
let unlockCode = "5432";
let rotations = minRotationsToUnlock(currentCode, unlockCode);
console.log("Rotations required =", rotations);
 */  

//25.Split n into maximum composite numbers:

/* function splitIntoCompositeNumbers(n) {
    let result = [];
    
    // First, use as many 4's as possible
    while (n >= 4) {
        result.push(4);
        n -= 4;
    }

    // Handle the remainder
    if (n === 1) {
        // If the remainder is 1, split one 4 into 6 and 3
        result.push(6);
        result.push(3);
    } else if (n === 2) {
        // If the remainder is 2, add a 6
        result.push(6);
    } else if (n === 3) {
        // If the remainder is 3, add a 9
        result.push(9);
    }

    return result;
}

// Example usage
let n = 11;
let result = splitIntoCompositeNumbers(n);
console.log("The maximum composite numbers are:", result);
 */


//26.Max Consecutive Diff Sum:
/* function maxSuming(arr){

    arr.sort((a,b) => a-b);


    let n = arr.length;

    let result = [];

    let i=0 , j = n-1;

    while(i <= j){
        if(i <= j ) result.push(arr[j--]);
        if(i <= j ) result.push(arr[i++]);


    }

    let maxSum = 0;
    for(let k=0; k < n; k++){
        maxSum += Math.abs(result[k] - result[(k+1) % n]);
       

    }

    return maxSum;


}


let arr = [4,2,1,8];
let result = maxSuming(arr);
console.log(result); //op : 18
 */

//27.Min and Max Costs to Buy All
/* function candyCost(price, k) {
    // Sort for minimum cost calculation
    price.sort((a, b) => a - b);
    let n = price.length;

    // Minimum cost
    let minCost = 0;
    let i = 0;
    let j = n - 1;
    while (i <= j) {
        minCost += price[i]; // Buy the cheapest candy
        i++; // Move to the next candy
        j -= k; // Skip k candies for free
    }

    // Sort for maximum cost calculation
    price.sort((a, b) => b - a);

    // Maximum cost
    let maxCost = 0;
    i = 0;
    j = n - 1;
    while (i <= j) {
        maxCost += price[i]; // Buy the most expensive candy
        i++; // Move to the next candy
        j -= k; // Skip k candies for free
    }

    return { minCost, maxCost };
}

// Example usage:
let price = [3, 2, 1, 4];
let k = 2;
let result = candyCost(price, k);
console.log(`Min cost: ${result.minCost}, Max cost: ${result.maxCost}`);
// Output: Min cost: 3, Max cost: 7
 */



//28.Find minimum number of currency notes and values that sum to given amount:

/* function money(amount, denominations){

    let result = [];

    for(let denom of denominations){
        if(amount === 0) break;

        let count = Math.floor(amount / denom);
        if(count > 0){
            result.push({denomination: denom, count: count});
            amount -= count * denom;
        }
    }

    return result;
}

let amount = 360;

let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

let notes = money(amount,denominations);


console.log("Minimum currency notes required:");
notes.forEach(note => {
    console.log(`Denomination: ${note.denomination}, Count: ${note.count}`);
}); */

//29.Maximum equal sum of three stacks


/* function maxEqualSum(stack1, stack2, stack3) {
    // Calculate initial sums
    let sum1 = stack1.reduce((a, b) => a + b, 0);
    let sum2 = stack2.reduce((a, b) => a + b, 0);
    let sum3 = stack3.reduce((a, b) => a + b, 0);

    // Pointers to the top of each stack
    let i = 0, j = 0, k = 0;

    while (true) {
        // If any stack is empty, return 0
        if (i === stack1.length || j === stack2.length || k === stack3.length) {
            return 0;
        }

        // If all sums are equal, return the sum
        if (sum1 === sum2 && sum2 === sum3) {
            return sum1;
        }

        // Remove element from the stack with the highest sum
        if (sum1 >= sum2 && sum1 >= sum3) {
            sum1 -= stack1[i++];
        } else if (sum2 >= sum1 && sum2 >= sum3) {
            sum2 -= stack2[j++];
        } else {
            sum3 -= stack3[k++];
        }
    }
}

// Example usage
let stack1 = [4, 2, 3];
let stack2 = [1, 1, 2, 3];
let stack3 = [1, 4];

let result = maxEqualSum(stack1, stack2, stack3);
console.log("Maximum Equal Sum:", result); // Output: 5
 */

//30.Activity Selection Problem | Greedy Algo-1

/* function activitySelection(start, finish) {
    // Combine start and finish times into pairs and sort by finish times
    let activities = start.map((s, i) => [s, finish[i]]);
    activities.sort((a, b) => a[1] - b[1]); // Sort by finish time

    let selectedActivities = [];
    let lastFinishTime = 0;


    // Iterate through sorted activities
    for (let i = 0; i < activities.length; i++) {
        if (activities[i][0] >= lastFinishTime) {
            selectedActivities.push(i); // Select the activity
            lastFinishTime = activities[i][1]; // Update the finish time
        }
    }

    return selectedActivities;
}

// Example usage
let start = [1, 3, 0, 5, 8, 5];
let finish = [2, 4, 6, 7, 9, 9];
let result = activitySelection(start, finish);
console.log("Selected activity indices:", result); // Output: [0, 1, 3, 4]
 */


//31.Divide 1 to n into two groups with minimum sum difference:


/* function tiny(n){

    let totalSum = (n * (n+1)) / 2;


    let group1 = [];
    let group2 = [];

    let sum1 = 0;

    let sum2 = 0;


    for(let i=n; i >= 1; i--){
        if(sum1 <= sum2){
            group1.push(i);
            sum1 += i;


        }else{
            group2.push(i);
            sum2 += i;
        }
    }
    return{
        group1,
        group2,

        difference: Math.abs(sum1 -  sum2),

    };
}


let n = 5;
let result = tiny(n);

console.log("Group 1:", result.group1);
console.log("Group 2:", result.group2);
console.log("Minimum difference:", result.difference); */  

//32.Paper Cut into Minimum Number of Squares:


/* function minSquares(A, B) {
    let totalSquares = 0;

    while (A > 0 && B > 0) {
        // Cut the largest square
        let squareSide = Math.min(A, B);
        totalSquares += 1; // Count this square

        // Update dimensions of the remaining rectangle
        if (A > B) {
            A -= squareSide;
        } else {
            B -= squareSide;
        }
    }

    return totalSquares;
}

// Example
let A = 6, B = 7;
console.log("Minimum number of squares:", minSquares(A, B)); // Output: 5
 */


///33.Minimum difference between groups of size two:

/* function minimumDifference(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Pair smallest with largest elements
    let pairs = [];
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        pairs.push([arr[i], arr[n - 1 - i]]);
    }

    // Step 3: Calculate sums of pairs
    let pairSums = pairs.map(pair => pair[0] + pair[1]);

    // Step 4: Find the difference between the max and min sums
    let maxSum = Math.max(...pairSums);
    let minSum = Math.min(...pairSums);

    return maxSum - minSum;
}

// Example usage:
const arr = [2, 6, 4, 3];
const result = minimumDifference(arr);
console.log("Minimum Difference:", result);
 */

///34.Maximum number of customers that can be satisfied with given quantity:


/* function maxSatisfiedCustomers(n, d, a, b, requests) {
    // Step 1: Calculate total cost for each customer
    let customers = requests.map((req, index) => ({
        id: index + 1,
        cost: a * req[0] + b * req[1]
    }));

    // Step 2: Sort customers by cost in ascending order
    customers.sort((c1, c2) => c1.cost - c2.cost);

    // Step 3: Satisfy as many customers as possible
    let satisfied = [];
    for (let customer of customers) {
        if (d >= customer.cost) {
            satisfied.push(customer.id);
            d -= customer.cost;
        } else {
            break;
        }
    }

    return satisfied;
}

// Example usage
let n = 5, d = 5;
let a = 1, b = 1;
let requests = [
    [2, 0],
    [3, 2],
    [4, 4],
    [10, 0],
    [0, 1]
];

let result = maxSatisfiedCustomers(n, d, a, b, requests);
console.log("Maximum satisfied customers:", result.length);
console.log("Customer IDs:", result);
 */


//35.Minimum initial vertices to traverse whole matrix with given conditions:

/* function findMinimumStartPoints(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Directions for moving: up, down, left, right
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    // Perform DFS to mark all reachable cells from (x, y)
    function dfs(x, y) {
        visited[x][y] = true;
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (
                nx >= 0 && nx < rows && ny >= 0 && ny < cols && // Bounds check
                !visited[nx][ny] && matrix[nx][ny] <= matrix[x][y] // Condition check
            ) {
                dfs(nx, ny);
            }
        }
    }

    // Function to find the minimum start points
    const startPoints = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j]) {
                startPoints.push([i, j]); // Add the new starting point
                dfs(i, j);               // Mark all reachable cells from this point
            }
        }
    }

    return startPoints;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [2, 3, 1],
    [1, 1, 1]
];

const result = findMinimumStartPoints(matrix);
console.log("Minimum Start Points:", result);
 */


//36.Linear Search Algorithm

/* function ding(arr,x){

    for(let i=0; i <arr.length; i++){
        if(arr[i] === x){
            return  i;
        }
    }
    return -1;
}

const arr = [2,6,7,4,9];

const x = 9;

console.log(ding(arr,x));
 */


//37.largerst number:

/* function maximum(arr){
    let max = arr[0];

    for(let i=0; i < arr.length; i++){
        if(arr[i]  > max){
            max = arr[i];
        }
    }
    return max;
}

const arr = [2,56,78,900];
console.log("the max value is:",maximum(arr));
 */

//38.second lasrgest 

/* function second(arr){
    let n = arr.length;

    for(let i=n-2; i>=0; i--){
        if(arr[i] != arr[n -1 ]){
            return arr[i];
        }
    }
    return -1;
}

const arr = [2,3,67,90];
console.log("The second lasrgerst noi: ",second(arr));
 */



//39.Largest three distinct elements in an array:

/* function third(arr){
    let n = arr.length;

    for(let i=n-3; i>=0; i--){
        if(arr[i] != arr[n -2 ]){
            return arr[i];
        }
    }
    return -1;
}
const arr = [2,3,67,90];
console.log("The second lasrgerst noi: ",third(arr)); */
//

//40.Leaders in an array:

/* function leaders(arr){
    let finall  = [];
let  rigth_side = -Infinity;

for(let i=arr.length - 1; i>= 0; i--){
    if(arr[i] >= rigth_side){
        finall.push(arr[i]);
        rigth_side = arr[i];
    }
}
return finall.reverse();
}

const arr = [6,17,2,3,5,1];
console.log(leaders(arr));
 */


//41.Check if an Array is Sorted:
/* function sort(arr,n){
    for(let i=1; i<n; i++){
        if(arr[i-1] > arr[i]){
            return false;
        }
    }
    return true;
}

let arr = [20, 43, 23, 45, 78, 88];
let n = arr.length;

if (sort(arr, n)) {
    console.log("Yes");
} else {
    console.log("No");
} */

    //42.Remove duplicates from Sorted Array:

    /* function removeDup(arr){
    const n = arr.length;

    if(n <= 1){
        return n;
    }
let incre = 1;
    for(let i=1; i< n; i++){
        if(arr[i] != arr[i-1]){
arr[incre++] = arr[i];
        }
    }
    return incre;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDup(arr);

console.log(arr.slice(0, newSize).join(' '));


 */

//43.Generating All Subarrays
/* function generateAllSubarrays(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) { // Starting index
        for (let j = i; j < n; j++) { // Ending index
            const subarray = arr.slice(i, j + 1); // Extract subarray
            console.log(subarray);
        }
    }
}

// Example usage:
const arr = [1, 2, 3];
generateAllSubarrays(arr);
 */

//44.Array Reverse – Complete Tutorial:

/* function rev(arr,start=0,end=arr.length-1){
    if(start > end) return arr;

    [arr[start],arr[end]] = [arr[end],arr[start]];

    return rev(arr,start+1,end-1);
}

const arr = [1,2,3,4,5];

console.log(rev(arr));
 */

//45.Duplicate within K Distance in an Array
/* function containsDuplicateWithinK(arr, k) {
    const hashMap = new Map(); // Stores the element and its last index

    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i])) {
            // Check if the difference between indices is within k
            if (i - hashMap.get(arr[i]) <= k) {
                return true;
            }
        }
        // Update the current index of the element
        hashMap.set(arr[i], i);
    }

    return false;
}

// Example Usage
const arr = [1, 2, 3, 1, 4, 5];
const k = 3;
console.log(containsDuplicateWithinK(arr, k)); // Output: true
 */


//46.Sum of all Subarrays:
/* function sub(arr){
let n = arr.length;
let result = 0;


for(let i=0; i<n; i++){
    let subarray = 0;
    for(let j=i; j<n; j++){
        subarray += arr[j];
        result += subarray;
    }
}
return result;

}
const arr = [1, 2, 3,4];
console.log(sub(arr)); // Output: 50

 */

//47.Stock Buy and Sell – Multiple Transaction Allowed:

/* function maxProfit(prices){

    let n = prices.length;

    let res = 0;

    for(let i=0; i<n; i++){
        if(prices[i] > prices[i-1]){
            res += prices[i] - prices[i-1];


        }
    }
    return res;
}

const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maxProfit(prices)); */


//48.Single Element Among Doubles:
/* function among(arr){
    let res = 0;

    for(let x of arr){
res ^= x;

    }
    return res;
}

let arr = [2, 3, 5, 4, 5, 3, 4];
console.log(among(arr)); //op: 2 */


//49.Missing number:

/* function miss(arr,n){
    let sum = 0;

    for(let i=0; i<n-1; i++){
        sum += arr[i];
    }
const expect = (n * (n+1)) / 2;

return expect - sum;


}

const arr  = [1,2,3,5];
let n = 5;
console.log(miss(arr,n)); //op: 4
   */

//50.Missing and Repeating in an Array:

/* 

function printTwoElements(arr) {
    let n = arr.length;
    let s = (n * (n + 1)) / 2;
    let ssq = (n * (n + 1) * (2 * n + 1)) / 6;

    let missing = 0;
    let repeating = 0;

    for (let i = 0; i < n; i++) {
        s -= arr[i];
        ssq -= arr[i] * arr[i];
    }

    missing = (s + Math.floor(ssq / s)) / 2;
    repeating = missing - s;

    console.log("Repeating:", repeating);
    console.log("Missing:", missing);
}

let arr = [4, 3, 6, 2, 1, 6, 7];
printTwoElements(arr); */


//51.Binary search:

/* function ding(arr){
    let low = 0 , high = arr.length - 1;

    while(low < high){
        while(arr[low] === 0 && low < high ) low++;
while(arr[high] === 1 && low < high) high--;
if(low < high){
    [arr[low] , arr[high]] = [arr[high] , arr[low]];
    low++;
    high--;

}
        
    }
}

let arr = [0, 1, 0, 1, 1, 1];
ding(arr);
console.log("Array after segregation:", arr); */

//51.largest element 

/* //lasrgest element max val

function fing(arr){
    let n = arr.length;

    let max = 0;

    for(let i=0; i<n; i++){
        if(arr[i] > max) {
           max = arr[i];

        }
    }
    return max;
}

const  arr = [12,45,78,32];
console.log(fing(arr));

 */

//52.Find the first repeating element in an array of integers:
/* function ding(arr){
    let n = arr.length;

   

    for(let i =0; i<n; i++){
        for(let j = i+1; j<n; j++){
            if(arr[i] === arr[j]){
                return i;
            }
        }
    

    }
return -1;
}

const arr = [10,3,4,7,3,8,9];
const finall = ding(arr);
    if(finall === -1){
console.log("No this is not repeatinf: ");

    }else {
        console.log("yes this is an reapeting no: ",arr[finall]);
    }

 */
//53.Missing no:
/* function frand(arr){
    let n = arr.length + 1 ;

    let hashArray = new Array(n+1).fill(0);


    for(let i=0; i< n; i++){
        hashArray[arr[i]]++;

    }

    for(let i=1; i<=n; i++){
        if(hashArray[i] === 0){
            return i;
        }
    }
    return -1;
}

const arr = [ 1, 2, 3, 5 ];  
console.log(frand(arr)); //4
 */

//54.Check if an Array is Sorted:
/* function ring(arr,n){

    if( n === 0 || n === 1){
        return true;
    }

    for(let i =0; i<n; i++){
        if(arr[i -1] > arr[i]){
            return false;
        }
    }

    return true;
    
}

const arr = [ 1,2,3,4];
let n = arr.length;
if(ring(arr,n)){
    console.log("YES THIS IS SORTING",(arr));
    
}else{
    console.log("NO THIS NOT SORTING");
} */

    //55.Check if a given string is sum-string:

    /* function isSumString(str) {
    function checkSumString(start, length1, length2) {
        const num1 = str.substr(start, length1); // First number
        const num2 = str.substr(start + length1, length2); // Second number
        const remaining = str.substr(start + length1 + length2); // Remaining string

        const sum = (BigInt(num1) + BigInt(num2)).toString(); // Sum of num1 and num2

        if (!remaining.startsWith(sum)) return false; // If sum doesn't match the start of remaining, return false

        if (remaining === sum) return true; // If remaining equals sum, it's a valid sum-string

        return checkSumString(start + length1, length2, sum.length); // Recursive call for the next part
    }

    const n = str.length;

    for (let length1 = 1; length1 <= n / 2; length1++) {
        for (let length2 = 1; length2 <= n - length1; length2++) {
            if (checkSumString(0, length1, length2)) return true; // If any valid split is found, return true
        }
    }

    return false; // If no valid split is found, return false
}


const str = "12243660";
console.log(isSumString(str));
 */

//56.Count all possible Paths between two Vertices:
/* function countpaths(graph,start,end,visit = {},pathCount = {count:0}){


    visit[start] = true;

    if(start === end ){
        pathCount.count++;

    }else{
        for(let neighbor of graph[start] || []){
            if (!visit[neighbor]) {
                countpaths(graph, neighbor, end, visit, pathCount);
            }
        }
    }
    visit[start] = false;

    return pathCount.count;
}
const graph = {
    A: ["E", "B", "C"],
    B: ["E", "D"],
    C: ["E"],
    D: ["C"],
    E: []
};

const start = "A";
const end = "E";

const totalPaths = countpaths(graph, start, end);
console.log(`Total paths between ${start} and ${end} are ${totalPaths}`); */

//57.Find if there is a path of more than k length from a source:
/* function isPathMoreThanK(graph, src, k, visited = {}) {
    // Mark the current node as visited
    visited[src] = true;

    // If k is less than or equal to 0, we have found a path longer than k
    if (k <= 0) return true;

    // Explore all adjacent nodes
    for (let [neighbor, weight] of graph[src] || []) {
        // If the neighbor is not visited, explore it
        if (!visited[neighbor]) {
            if (isPathMoreThanK(graph, neighbor, k - weight, visited)) {
                return true;
            }
        }
    }

    // Backtrack: unmark the current node
    visited[src] = false;

    return false;
}

// Example graph represented as an adjacency list with weights
const graph = {
    0: [[1, 4], [7, 8]],
    1: [[2, 8], [7, 11], [0, 4]],
    2: [[3, 7], [8, 2], [1, 8], [5, 4]],
    3: [[4, 9], [2, 7], [5, 14]],
    4: [[3, 9], [5, 10]],
    5: [[4, 10], [3, 14], [2, 4], [6, 2]],
    6: [[5, 2], [7, 1], [8, 6]],
    7: [[0, 8], [1, 11], [6, 1], [8, 7]],
    8: [[2, 2], [6, 6], [7, 7]],
};

const source = 0;
const k = 58;

console.log(
    `Is there a path of more than ${k} length from source ${source}?`,
    isPathMoreThanK(graph, source, k) ? "Yes" : "No"
);
 */

//58.Level Order Traversal (Breadth First Search or BFS) of Binary Tree:

/* class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function printLevelOrder(root){
    if(root === null) return;

    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        const node  = queue.shift()
        console.log(node.data);

        if(node.left !== null){
            queue.push(node.left);

        }

        if(node.right !== null){
            queue.push(node.right);
        }
        

        
    }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrder(root); 
 

// op : 1 2 3 4 5
 */

//59.Height and Depth of a node in a Binary Tree:

/* class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function findDepthAndHeight(root, k) {
    if (root === null)
        return;

    let depth = -1;
    let height = -1;

    const queue = [];
    queue.push(root);
    let level = 0;

    while (queue.length > 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const frontNode = queue.shift();
            if (frontNode.data === k)
                depth = level;
            if (frontNode.left !== null)
                queue.push(frontNode.left);
            if (frontNode.right !== null)
                queue.push(frontNode.right);
        }
        level++;
    }

    height = level - depth - 1;
    console.log("Depth: " + depth);
    console.log("Height: " + height);
}

// Binary Tree Formation
const root = new TreeNode(5);
root.left = new TreeNode(10);
root.right = new TreeNode(15);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(25);
root.left.right.right = new TreeNode(45);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

const k = 25;

findDepthAndHeight(root, k); */

//60.




