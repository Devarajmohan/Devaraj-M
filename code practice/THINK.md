////////               algorithm thinking      //////////


ARRAY:

1.Remove duplicates from a sorted array:

// emaple //

[22,24,31,24,1,2,15,2];

=>first we need to sort the array.
   
   const removeDup = (arr) => {
    arr.sort((a,b) => a-b);

   }

   const finall = [22,24,31,24,1,2,15,2];
=> then assign the array's value and index both.

     const unique = arr.filter((value,index) => {
        
     })
=> return to "indexOf" the value and index both.

const unique = arr.filter((value,index) => {
        return arr.indexOf(value) === index;
     })

// example code //

const removeDup = (arr) => {
    arr.sort((a,b) => a-b);

    const unique = arr.filter((value,index) => {
        return arr.indexOf(value) === index;

    });

    return unique;

}
const finall = [22,24,31,24,1,2,15,2];

const dum = removeDup(finall);

console.log(dum);

// output: [1,2,15,22,24,31];

///                  ///


2.Rotate an array by k steps:


[12, 2, 14, 42, 67]


=> we take two value "arr" and "k" k for rotate the array.



function rotateArray(arr, k) {
  // Calculate the effective rotation steps using modulus
  k = k % arr.length;

  // Split the array into two parts and concatenate them in reverse order
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
  
  return rotatedArray;
}

const array = [12, 2, 14, 42, 67];
const k = 2;
const result = rotateArray(array, k);
console.log(result); // Output: [42, 67, 12, 2, 14]



///                   ///


3.second largest :

//    //


const secondLargest = (arr) => {
  let largest = arr[0];
  let secondLarge = -Infinity;

  for(let i=0; i <arr.length; i++){
    if(arr[i] > largest ){
      secondLarge = largest;
      largest = arr[i];

    } else if(arr[i] < largest && arr[i] > secondLarge){
secondLarge = arr[i];
    }
  }
  return secondLarge;
}

const array = [12,34,56,78,100,540];
const finall = secondLargest(array);
console.log(finall); // 100


///                 ///

4.Merge two sort array:

=> Its already sorted input arrays 
[1,3,5,7,9]
[2,4,6,8,10]

=> we just merge this

=> first we need to concat both arrays:
function twoSort(arr1,arr2) {
return arr1.concat(arr2)

}
// output: [1,3,5,7,9,2,4,6,8,10];
const array1 = [1,3,5,7,9];
const array2 = [2,4,6,8,10];
const merge = twoSort(array1,array2);
console.log(merge); 

=>And then sort the both arrays:
function twoSort(arr1,arr2) {
return arr1.concat(arr2).sort((a,b) => a-b);

}

const array1 = [1,3,5,7,9];
const array2 = [2,4,6,8,10];
const merge = twoSort(array1,array2);
console.log(merge); 

// output: [1,2,3,4,5,6,7,8,9,10];


//           //


5.Find the missing number in an array of 1 to n:


function missingNumber(arr,n) {
  let xorAll = 0;
  let xorArray = 0;


  for(let i=1; i <=n; i++){
    xorAll ^= i;

  }
  for(let i=0; i <arr.length; i++){
    xorArray ^= arr[i];
  }
  return xorAll ^ xorArray;

 }

 const array = [1,2,4,5,6,7];
 const n =7;
 const finall = missingNumber(array,n);
 console.log(`missing numbers are:`,finall);

 // output: 3


 ///               ///



 6.Move all zeros to the end of the array:

 => first we separate into two parts non-zero and zero.

 =>non zero value assign first :
  function lastZero(arr) {
  let count = 0;

  for(let i=0; i < arr.length; i++){
    if(arr[i] !== 0){
      arr[count] = arr[i];
      count++;

    }
  }
//op: [1,2,3,4,5,6,8....empty];
 }
 
const array = [1,0,2,3,4,0,5,0,6,8];
const finall = lastZero(array);
console.log(finall);

=> then fill the empty arrays to 0's

 function lastZero(arr) {
  let count = 0;

  for(let i=0; i < arr.length; i++){
    if(arr[i] !== 0){
      arr[count] = arr[i];
      count++;

    }
  }
  while(count <arr.length){
    arr[count] = 0;
    count++;

  }
  return arr;
 }
 
const array = [1,0,2,3,4,0,5,0,6,8];
const finall = lastZero(array);
console.log(finall);

//op: [1,2,3,4,5,6,8,0,0,0];


//               //

7.Find the intersection of two arrays

function interSection(arr1,arr2){

  const box1 = new Set(arr1);
  const finall = arr2.filter(item => box1.has(item));
  return finall;


}
const array1 = [1,2,3,4,5];
const array2 = [2,3,4,5];

const dis = interSection(array1,array2);
console.log(dis); 

//output : [2,3,4,5]
//                ///

8.Find the union of two arrays:

=> find duplicate value use "new Set"

function union(arr1,arr2){
  const combain = [...arr1,...arr2];
  const merge = new Set(combain);
  return Array.from(merge);


 }
 const array1 = [3, 2, 1, 4, 5, 4,1];
const array2 = [3, 2, 4, 8,5, 6, 7];

const finall = union(array1,array2);
console.log(finall);
//op: [3, 2, 1, 4, 5, 8, 6, 7]

///                  ///


9.Check if an array is a subset of another array:


function isSub (arr1, arr2) {
  const box  = new Set(arr1);

  return arr2.every(item => box.has(item));

}
const mainArray = [1, 2, 3, 4, 5];
const subsetArray1 = [2, 3];     
const subsetArray2 = [2, 6]; 

console.log(isSub(mainArray,subsetArray1));
console.log(isSub(mainArray,subsetArray2));

//op: true 
//op:false

//       //

10.Find the equilibrium index in an array:

function equilibrium(arr){
  const totalSum  = arr.reduce((acc,val) => acc + val,0);

  let leftSum = 0;

  for(let i=0; i <arr.length; i++){
    const rightSum = totalSum - leftSum - arr[i];

    if(leftSum === rightSum){
      return i;
    }
    leftSum +=arr[i];

  }
  return -1;
}


const array = [1, 17, 5, 15, 1];
const equilibriumIndex = equilibrium(array);
console.log("Equilibrium index:", equilibriumIndex);

//op:-1


//                //


11.Rearrange positive and negative numbers in an array


function rearrange(arr){
 let negative = [];
 let positive = [];

 for(let i=0; i <arr.length; i++){
  if(arr[i] < 0){
    negative.push(arr[i]);
  }else {
    positive.push(arr[i])
  }
 }
 return [...negative,...positive];
}
const array = [12, -7, 5, -3, -6, 2, 9, -1];
const result = rearrange(array);
console.log(result);

//op : [-7, -3, -6, -1, 12, 5, 2, 9]

///                ///


12.Find the majority element in an array:

function majorityElement(nums) {
  let numsObj = {};
  let maxFreq = 0;
  let maxElement = null;
for (let num of nums) {
    numsObj[num] = numsObj[num] + 1 || 1;
  }
for (num in numsObj) {
    if (numsObj[num] > maxFreq) {
      maxFreq = numsObj[num];
      maxElement = parseInt(num);
    }
  }
  return maxElement;
}

const number = [8,9,2,5,2,9,3,2,4,4];
const final = majorityElement(number);
console.log(final);
//op: 2

///                 ///


13.Find the peak element in an array:


function peakValue(arr){
  let low = 0;
  let high = arr.length -1;

  while(low < high){
    let mid = Math.floor((low+high) / 2);

    if(arr[mid] < arr[mid+1]){
      low = mid+1;
    }else{
      high = mid;

    }
  }
  return low;

}

const array = [1, 3, 20, 4, 1, 0];
const peakIndex = peakValue(array);
console.log("Peak element is at index:", peakIndex); // Output: Index of the peak element
console.log("Peak element is:", array[peakIndex]);

// op :Peak element is at index: 2
// op: Peak element is: 20


14.Find the smallest positive missing number in an array:

=> first sort the whole arrays:

arr.sort((a,b) => a-b);

=> then assign the value "1" 

function missingPositive(arr){
  arr.sort((a,b) => a-b);
  let res =1;

  for(let i=0; i <arr.length; i++){
    
    if(arr[i] == res){
      res++;

    }else if(arr[i] > res){
      break;
    }

  }
  return res;
}

const array = [-2,1,0,-3,5,6,3,2];
console.log(missingPositive(array)); //op: 4



///                    ///

15.Trapping Rain Water problem:

const trap = (height) => {
  let leftMax = -1, 
      rightMax = -1, 
      left = 0, 
      right = height.length - 1, 
      water = 0;

  while (left <= right) {
      // Get the max wall height from both ends
      leftMax = height[left] > leftMax ? height[left] : leftMax;
      rightMax = height[right] > rightMax ? height[right] : rightMax;
      
      // Calculate the amount of water trapped
      if (leftMax > rightMax) {
          water += rightMax - height[right];
          right--;
      } else {
          water += leftMax - height[left];
          left++;
      }
  }

  return water;
};

const wall = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(wall)); // Output: 6
////                       ///


16.Implement a stack using an array:


class Stack {
    constructor() {
        this.items = []; // Array to hold stack elements
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Handle underflow
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Handle empty stack
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack elements
    print() {
        console.log(this.items.join(' '));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements:");
stack.print(); // Output: 10 20 30

console.log("Top element:", stack.peek()); // Output: 30
console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size:", stack.size()); // Output: 2
stack.print(); // Output: 10 20



////                 ///



17.Implement a queue using an array


class Queue {
    constructor() {
        this.items = []; // Array to hold queue elements
    }

    // Enqueue an element to the queue (add to the end)
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue an element from the queue (remove from the front)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Handle underflow
        }
        return this.items.shift();
    }

    // Peek at the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Handle empty queue
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue elements
    print() {
        console.log(this.items.join(' '));
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue elements:");
queue.print(); // Output: 10 20 30

console.log("Front element:", queue.front()); // Output: 10
console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue size:", queue.size()); // Output: 2
queue.print(); // Output: 20 30


///                  ///










18.Find the longest increasing subsequence:

function lengthOfLIS(nums) {
    // Edge case: if the array is empty, the LIS is 0
    if (nums.length === 0) return 0;

    // Create an array to store the length of LIS ending at each index
    const dp = new Array(nums.length).fill(1);

    // Loop through each element in the array
    for (let i = 1; i < nums.length; i++) {
        // Compare the current element with all the previous elements
        for (let j = 0; j < i; j++) {
            // If a previous element is smaller, update the LIS ending at the current index
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The answer is the maximum value in the dp array
    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = lengthOfLIS(nums);
console.log("Length of the longest increasing subsequence is:", lisLength); // Output: 4

19.Implement binary search in a rotated sorted array:

function searchRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Determine which half is sorted
        if (nums[left] <= nums[mid]) { 
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Target is in the left half
            } else {
                left = mid + 1; // Target is in the right half
            }
        } else { 
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Target is in the right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Test the function
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchRotatedArray(nums, target)); // Output: 4


///                       ///


20.Find the maximum sum of a subarray of size k:


function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Compute the sum of the first window of size k
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // Set the initial window sum as the maximum sum
    maxSum = windowSum;

    // Slide the window from start to end of the array
    for (let i = k; i < arr.length; i++) {
        // Slide the window to the right by subtracting the element going out and adding the new element
        windowSum += arr[i] - arr[i - k];
        
        // Update the maximum sum if the current window sum is greater
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Test the function
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9


////                     ///


21.Implement the Kadane's algorithm:


function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Update maxEndingHere by including the current element
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        
        // Update maxSoFar to hold the maximum sum found so far
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Test the function
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr)); // Output: 6


///                             ///




22.Find the minimum number of platforms required for a railway station:



function findPlatform(arrivals, departures) {
    // Sort both the arrays
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platformNeeded = 1;
    let maxPlatforms = 1;
    let i = 1; // Pointer for arrivals
    let j = 0; // Pointer for departures

    // Traverse through the arrival and departure arrays
    while (i < arrivals.length && j < departures.length) {
        // If next event in the sorted order is an arrival, increment platform count
        if (arrivals[i] <= departures[j]) {
            platformNeeded++;
            i++;
        }
        // If it's a departure, decrement platform count
        else {
            platformNeeded--;
            j++;
        }

        // Update the maximum number of platforms needed
        maxPlatforms = Math.max(maxPlatforms, platformNeeded);
    }

    return maxPlatforms;
}

// Test the function with sample data
const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log(findPlatform(arrivals, departures)); // Output: 3



///                 ///





21.Find the longest subarray with equal number of 0s and 1s:

function findLongestSubarray(arr) {
    // Replace all 0s with -1 to treat the problem as finding a subarray with a sum of 0
    let map = new Map(); // Hash map to store cumulative sum
    map.set(0, -1); // Initialize map with cumulative sum 0 at index -1
    
    let maxLength = 0; // To store the length of the longest subarray
    let cumulativeSum = 0; // Variable to store the cumulative sum

    for (let i = 0; i < arr.length; i++) {
        // Increment cumulative sum (add 1 for 1 and subtract 1 for 0)
        cumulativeSum += arr[i] === 1 ? 1 : -1;

        // Check if this cumulative sum was seen before
        if (map.has(cumulativeSum)) {
            // If seen before, calculate the length of the subarray and update maxLength
            maxLength = Math.max(maxLength, i - map.get(cumulativeSum));
        } else {
            // Store the cumulative sum with its corresponding index
            map.set(cumulativeSum, i);
        }
    }

    return maxLength;
}

// Example usage
const arr = [0, 1, 0, 1, 1, 1, 0, 0];
console.log(findLongestSubarray(arr)); // Output should be 6
//op: [0, 1, 0, 1, 1, 1, 0, 0] and [-1, 1, -1, 1, 1, 1, -1, -1]  final op:[-1, 0, -1, 0, 1, 2, 1, 0]  
At index 1, the cumulative sum is 0.
At index 3, the cumulative sum is 0 again.
At index 7, the cumulative sum is 0 again.

finall [1, 0, 1, 1, 1, 0, 0] // 6


///                   ////



22.Implement the Dutch National Flag algorithm:


=> its (red,white,blue) it means => os,1s,2s

function dutchNationalFlag(arr){
  let low = 0;
  let mid = 0;
  let high = arr.length -1;


  while(mid <= high){
    if(arr[mid] === 0){
      [arr[low],arr[mid]] = [arr[mid],arr[low]];
      low++;
      mid++;

    } else if(arr[mid] === 1){
mid++;
    }else if(arr[mid] === 2){
      [arr[mid],arr[high]] = [arr[high],arr[mid]];
      high--;
    }

    
  }
  return arr;
}

const array  = [2,0,1,0,2,1,0];
console.log(dutchNationalFlag(array));

//op: [0, 0, 0, 1, 1, 2, 2]


23.Find the smallest subarray with sum greater than a given value



function smallestSubarrayWithSum(arr, target) {
    let minLength = Infinity; // Initialize the minimum length to infinity
    let currentSum = 0; // To keep track of the sum of the current subarray
    let start = 0; // Start pointer for the sliding window

    // Traverse the array using the end pointer
    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the currentSum
        currentSum += arr[end];

        // While the currentSum is greater than the target, try to minimize the window size
        while (currentSum > target) {
            // Update the minLength if we found a smaller subarray
            minLength = Math.min(minLength, end - start + 1);

            // Subtract the starting element from the currentSum and move the start pointer
            currentSum -= arr[start];
            start++;
        }
    }

    // If minLength is still Infinity, it means no such subarray was found
    return minLength === Infinity ? 0 : minLength;
}

// Example usage
const arr = [1, 4, 45, 6, 10, 19];
const target = 51;
console.log(smallestSubarrayWithSum(arr, target)); // Output: 3


///                      ///



23.Implement the Boyer-Moore Majority Voting algorithm:


function majorityElementWithMoore(nums) {
  let candidate;
  let count = 0;

  for (let elem of nums) {
    if (count === 0) {
      candidate = elem;
    }
    if (candidate === elem) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

const numbers = [2,4,5,4,4,5,5,4,4];
console.log(majorityElementWithMoore(numbers));
// Output: 4


////                       ////



24.Find the maximum product subarray:


function maxProduct(nums) {
    if (nums.length === 0) return 0;

    // Initialize variables to store the maximum and minimum products up to the current position
    let maxProductSoFar = nums[0];
    let minProductSoFar = nums[0];
    let result = nums[0];

    // Traverse through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        let currentNum = nums[i];

        // If the current number is negative, swap the maximum and minimum products
        if (currentNum < 0) {
            [maxProductSoFar, minProductSoFar] = [minProductSoFar, maxProductSoFar];
        }

        // Calculate the maximum and minimum products up to the current position
        maxProductSoFar = Math.max(currentNum, maxProductSoFar * currentNum);
        minProductSoFar = Math.min(currentNum, minProductSoFar * currentNum);

        // Update the result with the maximum product found so far
        result = Math.max(result, maxProductSoFar);
    }

    return result;
}

// Example usage
const nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); // Output: 6



///                            ///




25.Find the maximum product subarray:

var maxProduct = function(nums) {
  // Max product in the current contiguous array
  let currentMax = nums[0];
  // Mind product in the current contiguous array. We need this value in case we encounter 2 negative numbers whose product could potentially give us the max product of the entire array
  let currentMin = nums[0];
  // Max product of a contiguous array
  let finalMax = nums[0];

for(let i = 1; i < nums.length; i++){
  let temp = currentMax
  // Because we are looking for a contiguous subarray product, the current max must contain the current number in the array. 
  currentMax = Math.max(Math.max(currentMax * nums[i], currentMin*nums[i]), nums[i])
  // Use temp here in case the previous currentMax was negative
  currentMin = Math.min(Math.min(temp * nums[i], currentMin*nums[i]), nums[i])
  // Record highest max at the end of every contiguous subarray
  finalMax = Math.max(currentMax, finalMax);
}

return finalMax;
};

const number  = [2,4,-2,4,5];
console.log(maxProduct(number));

//op: 20

26.Implement the Jump Game algorithm:

function canJump(nums) {
    let farthest = 0; // This keeps track of the farthest index we can reach

    // Traverse through each index in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the farthest we can reach, we cannot move forward
        if (i > farthest) {
            return false;
        }

        // Update the farthest point we can reach from the current index
        farthest = Math.max(farthest, i + nums[i]);
    }

    // If we can reach the end of the array, return true
    return true;
}

// Example usage
const nums1 = [2, 3, 1, 1, 4];
console.log(canJump(nums1)); // Output: true

const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2)); // Output: false


///                      ///


27.Find the next greater element for every element in an array:


function nextGreaterElements(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1); // Initialize result array with -1

    // Traverse the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        // Pop elements from the stack until we find a greater element
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If the stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }

        // Push the current element onto the stack
        stack.push(arr[i]);
    }

    return result;
}

// Example usage
const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElements(arr)); // Output: [5, 10, 10, -1, -1]


///                      ///



28.Implement the Sliding Window Maximum algorithm


function slidingWindowMaximum(nums, k) {
    let result = []; // To store the maximum of each window
    let deque = [];  // Double-ended queue to store indices of useful elements

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the front of the deque if they are outside the window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back of the deque that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // Add the current element's index to the deque
        deque.push(i);

        // Once we've processed at least the first 'k' elements, add the front of the deque to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMaximum(nums, k)); // Output: [3, 3, 5, 5, 6, 7]



///                                ///


29.Find the longest substring without repeating characters



function longestSubstringWithoutRepeatingCharacters(s) {
    let charMap = new Map(); // Hash map to store character indices
    let left = 0; // Left pointer for the sliding window
    let maxLength = 0; // Variable to store the maximum length of substring

    // Traverse the string using the right pointer
    for (let right = 0; right < s.length; right++) {
        // If the character is already in the map and within the current window
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            // Move the left pointer to the right of the previous occurrence
            left = charMap.get(s[right]) + 1;
        }

        // Update the character's index in the map
        charMap.set(s[right], right);

        // Calculate the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
const s = "abcabcbb";
console.log(longestSubstringWithoutRepeatingCharacters(s)); // Output: 3



///                 ///


30.Implement the Merge Intervals algorithm:

function mergeIntervals(intervals) {
    // Step 1: Sort the intervals based on the starting times
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = []; // Array to hold merged intervals

    for (let i = 0; i < intervals.length; i++) {
        // If merged is empty or there is no overlap
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]); // Add the interval
        } else {
            // There is an overlap, merge the current interval
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    return merged; // Return the merged intervals
}

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18], [17, 20]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 20]]


31.Find the minimum number of jumps to reach the end of an array:


function minJumps(nums) {
    if (nums.length <= 1) return 0; // No jumps needed if there's 1 or fewer elements

    let jumps = 0; // Number of jumps made
    let currentEnd = 0; // End of the current jump range
    let farthest = 0; // Farthest index reachable

    for (let i = 0; i < nums.length - 1; i++) { // Loop until the second last index
        // Update the farthest we can reach
        farthest = Math.max(farthest, i + nums[i]);

        // If we reach the end of the current jump range, we need to jump
        if (i === currentEnd) {
            jumps++; // Increment jump count
            currentEnd = farthest; // Update the end of the current jump range

            // Early exit if we can reach or exceed the last index
            if (currentEnd >= nums.length - 1) break;
        }
    }

    return jumps; // Return the number of jumps
}

// Example usage
const nums = [2, 3, 1, 1, 4];
const minJumpsCount = minJumps(nums);
console.log(minJumpsCount); // Output: 2


///                          ///


32.Implement the Stock Buy Sell to Maximize Profit algorithm:



function maxProfit(prices) {
    let minPrice = Infinity; // Initialize minPrice to a large number
    let maxProfit = 0; // Initialize maxProfit to zero

    for (let price of prices) {
        // Update the minimum price if the current price is lower
        if (price < minPrice) {
            minPrice = price;
        }

        // Calculate the potential profit
        const profit = price - minPrice;

        // Update maxProfit if the calculated profit is higher
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit; // Return the maximum profit
}

// Example usage
const stockPrices = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(stockPrices);
console.log(maxProfitValue); // Output: 5



////                          ////


33.Find the Longest Palindromic Substring:



function longestPalindrome(s) {
    if (s.length < 1) return ""; // If the string is empty

    let start = 0; // To track the start index of the longest palindrome
    let end = 0; // To track the end index of the longest palindrome

    // Helper function to expand around center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome
        return right - left - 1; // (right - left + 1) - 2
    };

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        const len1 = expandAroundCenter(i, i);
        // Check for even-length palindromes
        const len2 = expandAroundCenter(i, i + 1);
        const maxLen = Math.max(len1, len2);

        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
}

// Example usage
const str = "babad";
const longestPalindromicSubstring = longestPalindrome(str);
console.log(longestPalindromicSubstring); // Output could be "bab" or "aba"

///                              ///

34.Implement the Longest Common Subsequence algorithm:

function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // Create a DP table with (m+1) x (n+1)
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // take max from top or left
            }
        }
    }

    // The length of the longest common subsequence is in the bottom-right cell
    return dp[m][n];
}

// Example usage
const text1 = "abcde";
const text2 = "ace"; 
const length = longestCommonSubsequence(text1, text2);
console.log(length); // Output: 3 (The LCS is "ace")


///                         ///


35.Find the Shortest Unsorted Continuous Subarray:


function findUnsortedSubarray(nums) {
    const n = nums.length;
    let left = 0, right = n - 1;

    // Step 1: Find the first element from the left that is out of order
    while (left < n - 1 && nums[left] <= nums[left + 1]) {
        left++;
    }

    // If the entire array is sorted
    if (left === n - 1) return 0;

    // Step 2: Find the first element from the right that is out of order
    while (right > 0 && nums[right] >= nums[right - 1]) {
        right--;
    }

    // Step 3: Find the min and max in the unsorted subarray
    const subarrayMin = Math.min(...nums.slice(left, right + 1));
    const subarrayMax = Math.max(...nums.slice(left, right + 1));

    // Step 4: Expand the left boundary
    while (left > 0 && nums[left - 1] > subarrayMin) {
        left--;
    }

    // Step 5: Expand the right boundary
    while (right < n - 1 && nums[right + 1] < subarrayMax) {
        right++;
    }

    return right - left + 1; // Length of the shortest unsorted continuous subarray
}

// Example usage
const nums = [2, 6, 4, 8, 10, 9, 15];
const length = findUnsortedSubarray(nums);
console.log(length); // Output: 5
///                   ///




36.Implement the Container With Most Water algorithm:


function maxArea(height) {
    let left = 0;              // Left pointer
    let right = height.length - 1; // Right pointer
    let maxArea = 0;          // Variable to store maximum area

    while (left < right) {
        // Calculate the current area
        const currentHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentArea = currentHeight * width;

        // Update maximum area if the current area is larger
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return maxArea; // Return the maximum area found
}

// Example usage
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)); // Output: 49




////                         ////




37.Find the Longest Consecutive Sequence in an array:


function longestConsecutive(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    const numSet = new Set(nums); // Create a set from the array for O(1) lookups
    let maxLength = 0; // Variable to track the maximum length of consecutive sequences

    for (const num of nums) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1; // Start counting the streak from 1

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++; // Increment the streak length
            }

            // Update the maximum length found
            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength; // Return the maximum length of consecutive sequences
}

// Example usage
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output: 4 (The longest consecutive sequence is 1, 2, 3, 4)



///                      ///


38.Implement the Maximum Product of Three Numbers algorithm:


function maximumProduct(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // The maximum product can be from the last three numbers or the first two numbers and the last one
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of the three largest numbers
    const product2 = nums[0] * nums[1] * nums[n - 1]; // Product of the two smallest numbers and the largest number
    
    // Return the maximum of the two products
    return Math.max(product1, product2);
}

// Example usage
const nums = [-10, -10, 5, 2];
console.log(maximumProduct(nums)); // Output: 500

///                    ///


39.Find the Kth Largest Element in an Array:

=> sort [3, 2, 1, 5, 6, 4] => [6, 5, 4, 3, 2, 1] 

function findKthLargest(nums, k) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);
    // Return the Kth largest element
    return nums[k - 1];
}

// Example usage
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5


////                    ////



40.Implement the Find All Duplicates in an Array algorithm:


function findDuplicates(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Use the absolute value of the current number to find the index
        const index = Math.abs(nums[i]) - 1;
        
        // Check if the value at this index is negative
        if (nums[index] < 0) {
            // If it is negative, this number has been seen before
            duplicates.push(index + 1);
        } else {
            // Negate the value at this index to mark it as seen
            nums[index] = -nums[index];
        }
    }
    
    return duplicates;
}

// Example usage
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]


///                       ///


41.Find the Minimum Size Subarray Sum:

function minSubArrayLen(target, nums) {
    let minLength = Infinity; // Initialize minLength to Infinity
    let currentSum = 0; // To keep track of the current sum
    let start = 0; // Start pointer for the sliding window

    // Iterate through the array with the end pointer
    for (let end = 0; end < nums.length; end++) {
        // Add the current element to the current sum
        currentSum += nums[end];

        // While currentSum is greater than or equal to target
        while (currentSum >= target) {
            // Update minLength if a smaller subarray is found
            minLength = Math.min(minLength, end - start + 1);

            // Subtract the starting element from currentSum and move the start pointer
            currentSum -= nums[start];
            start++;
        }
    }

    // If minLength is still Infinity, it means no such subarray was found
    return minLength === Infinity ? 0 : minLength;
}

// Example usage
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums)); // Output: 2


///                      ///



43.Implement the Product of Array Except Self algorithm:


function productExceptSelf(nums) {
    const length = nums.length;
    const output = new Array(length).fill(1);

    // Step 1: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        output[i] = leftProduct; // Set the output[i] to leftProduct
        leftProduct *= nums[i];   // Update leftProduct for next index
    }

    // Step 2: Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        output[i] *= rightProduct; // Multiply with the rightProduct
        rightProduct *= nums[i];    // Update rightProduct for previous index
    }

    return output;
}

// Example usage
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]


///                   ////



44.Find the Maximum Gap in a sorted array:



function maximumGap(nums) {
    if (nums.length < 2) return 0; // No gap if there are less than 2 elements

    // Sort the array
    nums.sort((a, b) => a - b);

    let maxGap = 0;

    // Find the maximum gap between consecutive elements
    for (let i = 1; i < nums.length; i++) {
        const gap = nums[i] - nums[i - 1];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap;
}

// Example usage
const nums = [3, 6, 9, 1];
console.log(maximumGap(nums)); // Output: 3



///                  ///






45.Implement the Median of Two Sorted Arrays algorithm:


function findMedianSortedArrays(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;

    // Ensure nums1 is the smaller array
    if (n > m) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0, right = n, halfLength = Math.floor((n + m + 1) / 2);

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = halfLength - partition1;

        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === n ? Infinity : nums1[partition1];

        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === m ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // We found the correct partitions
            if ((n + m) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // We are too far on the right side for partition1. Go left.
            right = partition1 - 1;
        } else {
            // We are too far on the left side for partition1. Go right.
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted or not valid.");
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5



//                        ///
