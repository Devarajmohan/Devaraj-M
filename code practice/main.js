//1. merge sort array //
/* function merge(nums1, m, nums2, n) {
  // Start filling nums1 from the end
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the end of merged array in nums1

  // Compare elements from the end and fill nums1
  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
      } else {
          nums1[k] = nums2[j];
          j--;
      }
      k--;
  }

  // If nums2 is not exhausted, copy the remaining elements
  while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
  }
}

// Example usage
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
 */

/* function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2

  // While both arrays have elements left to compare
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  // If there are remaining elements in arr1, add them to mergedArray
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  // If there are remaining elements in arr2, add them to mergedArray
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray;
}

// Example usage:
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 5, 8];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7, 8] */


// merge sort array //

//2.remove the element ///
/* function removeElement(nums, val) {
  // Use filter to create a new array with all elements that are not equal to val
  return nums.filter(element => element !== val);
}

// Example usage
let nums = [3, 2, 2, 3];
let val = 3;

nums = removeElement(nums, val);

console.log(nums); // Output: [2, 2] */


//     ///

/**
/*  * Removes all occurrences of a specified value from an array in place.
 * @param {number[]} nums - The array from which elements will be removed.
 * @param {number} val - The value to be removed from the array.
 */
/* function removeElement(nums, val) {
  // Iterate through the array from the end to the beginning
  for (let i = nums.length - 1; i >= 0; i--) {
      // If the element equals the value to be removed
      if (nums[i] === val) {
          // Remove the element from the array
          nums.splice(i, 1);
      }
  }
}

// Example usage
let nums = [3, 2, 2, 3];
let val = 3;

removeElement(nums, val);

console.log(nums); // Output: [2, 2] */ 
// //

//3.Remove Duplicates from Sorted Array //
/* function removeDulicates(nums){
  const uniqueSet = new Set(nums);
  const uniqueArray = Array.from(uniqueSet);

  for(let i=0; i <uniqueArray.length; i++){
    nums[i] = uniqueArray[i];
  }
  return uniqueArray.length;
}
const nums=[1,2,2,3,4,5,5,6,2];
const length=removeDulicates(nums);
console.log(nums.slice(0,length)); */

//  //

//4. Remove Duplicates from Sorted Array II //
/* 
function removeDuplicates(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (count < 2 || nums[i] !== nums[count - 2]) nums[count++] = nums[i];
  }
  return count;
}

const nums = [1, 1, 1, 2, 2, 3];
const length = removeDuplicates(nums);
console.log(nums.slice(0, length)); // Output: [1, 1, 2, 2, 3] */
///


//5.Rotate Array //
/* function rotate(nums, k) {
  const n = nums.length;
  k %= n;
  nums.unshift(...nums.splice(-k, k)); // Move last k elements to the front
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 4);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4] */


//   //


//6.Best Time to Buy and Sell Stock //
/* function maxProfit(prices) {
  let minPrice = prices[0], maxProfit = 0;
  prices.forEach(price => maxProfit = Math.max(maxProfit, price - (minPrice = Math.min(minPrice, price))));
  return maxProfit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 */
//     //

//7.Best Time to Buy and Sell Stock II //
/* function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          profit += prices[i] - prices[i - 1]; // Add profit for every upward price movement
      }
  }
  return profit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 7 */

//   //


//8. jump game //

/* function canJump(nums) {
  let reach = 0;
  for (let i = 0; i <= reach; i++) {  
         
      reach = Math.max(reach, i + nums[i]);  
      if (reach >= nums.length - 1) return true;
  }
  return false;
}

const nums1 = [2, 3, 1, 1, 4];
console.log(canJump(nums1)); 

const nums2 = [3,2,1,0,4];
console.log(canJump(nums2)); */

//  //

//9.Jump Game II //
/* function jump(nums) {
  let jumps = 0, end = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);  // Find the farthest we can reach
      if (i === end) {  // If we've reached the end of our current jump
          jumps++;      // We need another jump
          end = farthest;  // Update the end to the farthest point we can reach
      }
  }
  return jumps;
}

// Example usage:
const nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1));  // Output: 2

const nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2));  // Output: 2 */

//  //


//10.H-index //
/* function hIndex(citations) {
  citations.sort((a, b) => b - a);  // Sort citations in descending order
  let h = 0;
  while (h < citations.length && citations[h] > h) {
      h++;  // Increment h as long as citations[h] > h
  }
  return h;
}

// Example usage:
const citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));  // Output: 3 */

//  //


//11.Insert Delete GetRandom O(1) //
/* class RandomizedSet {
  constructor() {
    this.map = new Map();  // Stores value -> index mapping
    this.arr = [];         // Stores values
  }

  // Inserts a value to the set. Returns true if the set did not already contain the specified element.
  insert(val) {
    if (this.map.has(val)) return false; // Value already exists
    this.map.set(val, this.arr.length);  // Map value to its index in the array
    this.arr.push(val);                  // Add value to the array
    return true;
  }

  // Removes a value from the set. Returns true if the set contained the specified element.
  remove(val) {
    if (!this.map.has(val)) return false; // Value does not exist

    const index = this.map.get(val);       // Get index of the value
    const lastElement = this.arr[this.arr.length - 1];  // Last element in the array

    this.arr[index] = lastElement;         // Replace the element to be removed with the last element
    this.map.set(lastElement, index);      // Update the map with the new index of the last element

    this.arr.pop();                        // Remove the last element
    this.map.delete(val);                  // Remove the value from the map

    return true;
  }

  // Get a random element from the set.
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.arr.length);  // Pick a random index
    return this.arr[randomIndex];                                     // Return the value at the random index
  }
}

// Example Usage
const set = new RandomizedSet();
console.log(set.insert(1)); // true: 1 is inserted
console.log(set.insert(2)); // true: 2 is inserted
console.log(set.getRandom()); // 1 or 2: randomly returns 1 or 2
console.log(set.remove(1)); // true: 1 is removed
console.log(set.getRandom()); // 2: 1 was removed, so should return 2 */

//    //


//12.Product of Array Except Self //

/* function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n).fill(0);

  // Calculate left products
  let left = 1;
  for (let i = 0; i < n; i++) {
      output[i] = left;
      left *= nums[i];
  }

  // Calculate right products and multiply with left products
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
      output[i] *= right;
      right *= nums[i];
  }

  return output;
}

// Example Usage
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6] */

//    //

//13.gas station //

/* function canCompleteCircuit(gas, cost) {
  const n = gas.length;
  let totalGas = 0;
  let totalCost = 0;
  let currentTank = 0;
  let startIndex = 0;

  for (let i = 0; i < n; i++) {
      totalGas += gas[i];
      totalCost += cost[i];
      currentTank += gas[i] - cost[i];
      
      if (currentTank < 0) {
          startIndex = i + 1;
          currentTank = 0;
      }
  }

  return totalGas >= totalCost ? startIndex : -1;
}

// Example Usage
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); // Output: 3 */

// 14.candy //
/* function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  // Left-to-right pass
  for (let i = 1; i < n; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candies[i] = candies[i - 1] + 1;
      }
  }

  // Right-to-left pass
  for (let i = n - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      }
  }

  // Calculate total candies
  return candies.reduce((total, num) => total + num, 0);
}

// Example usage:
const ratings = [1, 0, 2];
console.log(candy(ratings)); // Output: 5 */

//15. Trapping rain water //
/* const trap = (height) => {
  let leftMax = -1, 
      rightMax = -1, 
      left = 0, 
      right = height.length - 1, 
      water = 0;

  while (left <= right) {
      //Get the max wall height from both the ends
      leftMax = height[left] > leftMax ? height[left] : leftMax
      rightMax = height[right] > rightMax? height[right] : rightMax
      
      //calculate the amount of water trapped
      if (leftMax > rightMax) {
          water += rightMax - height[right]
          right--
      }
      else {
          water += leftMax - height[left]
          left++
      }
  }

  return water
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));  *///output : 6 //







