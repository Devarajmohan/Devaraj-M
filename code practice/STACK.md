
////////////// Stack DSA/// 


Stack is LIFO    it takes individual memory spaces.

1.Array based stack 
2.linked list based stack 
3.two stack in one array


///       oprations  ///
1.push
2.pop
3.peek
4.is Empty
5.size

///                     ///


1.Array based stack :

class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an element to the top of the stack
    push(item) {
        this.stack.push(item);
    }

    // Pop the top element from the stack and return it
    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            return "Stack is empty";
        }
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } else {
            return "Stack is empty";
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek());  // Output: Top element: 30
console.log("Size of stack:", stack.size());  // Output: Size of stack: 3
console.log("Popped element:", stack.pop());  // Output: Popped element: 30
console.log("Is stack empty?", stack.isEmpty());  // Output: Is stack empty? false
console.log("Size of stack:", stack.size());  // Output: Size of stack: 2


///                    ///


2.Linked list based stackes:

class Node {
  constructor(value) {
    this.value = value; // Store the value of the node
    this.next = null; // Pointer to the next node in the stack
  }
}

// Linked list-based stack class
class LinkedListStack {
  constructor() {
    this.top = null; // Pointer to the top element of the stack
    this.size = 0; // Size of the stack
  }

  // Push an item onto the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; // Link the new node to the current top node
    this.top = newNode; // Update the top to be the new node
    this.size++; // Increment the size of the stack
  }

  // Pop an item from the stack
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    } else {
      const poppedValue = this.top.value; // Get the value of the top node
      this.top = this.top.next; // Move the top pointer to the next node
      this.size--; // Decrement the size of the stack
      return poppedValue; // Return the popped value
    }
  }

  // Get the top item of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty";
    } else {
      return this.top.value; // Return the value of the top node
    }
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0; // Returns true if size is 0, otherwise false
  }

  // Get the size of the stack
  getSize() {
    return this.size; // Return the current size of the stack
  }
}

// Testing the LinkedListStack class
const stack = new LinkedListStack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log("Top element:", stack.peek()); // Output: Top element: 300
console.log("Size of stack:", stack.getSize()); // Output: Size of stack: 3
console.log("Popped element:", stack.pop()); // Output: Popped element: 300
console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false
console.log("Size of stack:", stack.getSize()); // Output: Size of stack: 2


///                            ///




3.Two stack in one Array:



class TwoStacks {
  constructor(size) {
    this.size = size; // Maximum size of the array
    this.array = new Array(size); // Array to store both stacks
    this.top1 = -1; // Top pointer for Stack 1
    this.top2 = size; // Top pointer for Stack 2 (starts from the end)
  }

  // Push an item to Stack 1
  push1(value) {
    if (this.top1 < this.top2 - 1) { // Check for space between stacks
      this.top1++;
      this.array[this.top1] = value;
    } else {
      console.log("Stack 1 Overflow");
    }
  }

  // Push an item to Stack 2
  push2(value) {
    if (this.top1 < this.top2 - 1) { // Check for space between stacks
      this.top2--;
      this.array[this.top2] = value;
    } else {
      console.log("Stack 2 Overflow");
    }
  }

  // Pop an item from Stack 1
  pop1() {
    if (this.top1 >= 0) {
      const value = this.array[this.top1];
      this.top1--;
      return value;
    } else {
      return "Stack 1 Underflow";
    }
  }

  // Pop an item from Stack 2
  pop2() {
    if (this.top2 < this.size) {
      const value = this.array[this.top2];
      this.top2++;
      return value;
    } else {
      return "Stack 2 Underflow";
    }
  }

  // Peek at the top item of Stack 1
  peek1() {
    if (this.top1 >= 0) {
      return this.array[this.top1];
    } else {
      return "Stack 1 is empty";
    }
  }

  // Peek at the top item of Stack 2
  peek2() {
    if (this.top2 < this.size) {
      return this.array[this.top2];
    } else {
      return "Stack 2 is empty";
    }
  }

  // Check if Stack 1 is empty
  isEmpty1() {
    return this.top1 === -1;
  }

  // Check if Stack 2 is empty
  isEmpty2() {
    return this.top2 === this.size;
  }
}

// Testing the TwoStacks class
const twoStacks = new TwoStacks(10); // Create an array of size 10

twoStacks.push1(10);
twoStacks.push1(20);
twoStacks.push2(30);
twoStacks.push2(40);

console.log("Top of Stack 1:", twoStacks.peek1()); // Output: Top of Stack 1: 20
console.log("Top of Stack 2:", twoStacks.peek2()); // Output: Top of Stack 2: 40

console.log("Popped from Stack 1:", twoStacks.pop1()); // Output: Popped from Stack 1: 20
console.log("Popped from Stack 2:", twoStacks.pop2()); // Output: Popped from Stack 2: 40

console.log("Is Stack 1 empty?", twoStacks.isEmpty1()); // Output: Is Stack 1 empty? false
console.log("Is Stack 2 empty?", twoStacks.isEmpty2()); // Output: Is Stack 2 empty? false




///                                     ///


IMPORTANT QA USING STACK:


1.Balanced Parentheses:

2.Next Greater Element:

3.Implement Stack Using Queues: 


4.Evaluate Reverse Polish Notation: 


5.Min Stack:

6.Sort a Stack:

7.Largest Rectangle in Histogram:

8.Trapping Rain Water:



1.nextGreaterElement:

///              ///



function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}

const arr1 = [98, 23, 54, 12, 20, 7, 27 ];
console.log(nextGreaterElement(arr1)); // Output: [5, 25, 25, -1]
[-1, 54, -1, 20, 27, 27, -1]


//                 //


2.Balanceed parathies:

//                 //


function isBalanced(expression) {
  let stack = [];
  let pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of expression) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // Output: true
console.log(isBalanced("{[(])}")); // Output: false
//           //

3.Min stack;

//                   ///
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // Output: -3
minStack.pop();
console.log(minStack.top());     // Output: 0
console.log(minStack.getMin());  // Output: -2


//                //

4.Sort using stack:

//                   ///

function sortStack(stack) {
  if (stack.length === 0) {
    return;
  }

  let top = stack.pop();
  sortStack(stack);
  insertSorted(stack, top);
}

function insertSorted(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  let top = stack.pop();
  insertSorted(stack, value);
  stack.push(top);
}

let stackToSort = [34, 3, 31, 98, 92, 23];
sortStack(stackToSort);
console.log(stackToSort);  // Output: [3, 23, 31, 34, 92, 98]

//                     //


5.Reverse Polish Notation :


///                  ///

function evalRPN(tokens) {
  let stack = [];
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(Math.trunc(a / b)); break;
      }
    }
  }
  return stack.pop();
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));  // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));  // Output: 6

///                      ///

6.Largest Rectangle in Histogram:


///                    ///
function largestRectangleArea(heights) {
    let stack = [];  // Stack to store indices of histogram bars
    let maxArea = 0;  // Variable to store the maximum area found
    let index = 0;  // Index for iterating over heights

    // Traverse through all bars in the histogram
    while (index < heights.length) {
        // If current bar is taller than or equal to the bar at the top of the stack, push it
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index);
            index++;
        } else {
            // Pop the top of the stack and calculate the area for the popped bar
            let top = stack.pop();
            let height = heights[top];
            let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    // Process remaining bars in the stack
    while (stack.length > 0) {
        let top = stack.pop();
        let height = heights[top];
        let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}

// Example usage:
let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));  // Output: 10


///                  ///

7.Trapping Rain Water:


//               ///



//                ///


8.Queue using stack:


//              //
class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

const queue = new QueueUsingStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());  // Output: 10
console.log(queue.dequeue());  // Output: 20


//               //