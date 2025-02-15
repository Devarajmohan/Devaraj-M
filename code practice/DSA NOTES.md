///// Big O Notation (O) - Worst Case:    ////
DSA TOPICES :


1.Array
2.String
3.LinedList
4.Searching
5.Sorting
6.Divide&Conquer
7.Stack
8.Queue
9.Tree
10.Graph
11.Greedy
12.recursion
13.BackTracking
14.Dynamic Progrmamming.


There are 7 types:

1.O(1) - Constant Time:[takes constant time foe everything]
2.O(n) - Linear Time:[->Runs once for each element in input]
3.O(n²) - Quadratic Time:[->Two loops, often indicates quadratic]
4.O(log n) - Logarithmic Time:[->Input size reduced by half each time]
5.O(n log n) - Linearithmic Time: [->Sorting algorithms with divide-and-conquer]
6.O(2ⁿ) - Exponential Time: [->Deciding which projects to fund with a limited budget.
Finding the best set of investments to maximize profit under constraints.]
7.O(n!) - Factorial Time: [ The algorithm explores all possible routes (permutations) to find the best one -> travel to find the shortest routes ]

////        important notes                       ////

DSA NoTeS:

1.Arrays
2.Linked lists
3.Stack
4.Queues
5.Binary trees
6.Hash tables

git link:
https://github.com/FrontendFreaks/DSA-in-JavaScript/tree/main

Basic content before learning DSA:

1.Time complexity:
link: https://www.wscubetech.com/resources/dsa/time-complexity
2.space complexity
3.Big O Notation

SHORT EXPLANATIONS:

 Asymptotic Notation in Data Structure:


 =>Evaluate the performance of algorithm based on input size.

Types of Asymptotic Notation in Data Structure:

 1.Big O Notation (O) - Worst Case.
 2.Omega Notation (Ω) - Best Case.
 3.Theta Notation (Θ) - Average Case / Tight Bound.



 1.Big O Notation (O) - Worst Case:


 =>Big O Notation (O) describes the "upper bound" of an algorithm's time or space complexity.

 =>It tells us the "maximum time" or space an algorithm will take to complete as the input size grows.

 =>Big O gives the worst-case scenario, which means it provides a guarantee that the algorithm will not exceed this bound.

 //Example //

 we using to find no "50" [10,20,30,40,50] using array.

 using Big O Notation => it search the value one by one and finally find the "50". it takes long time to find the values ,so that's why it is called worst case.


 //       //

 2.Omega Notation (Ω) - Best Case:

 =>Omega Notation (Ω) describes the "lower bound" of an algorithm’s time or space complexity.

 => It provides a "best-case scenario", meaning it gives the "minimum time" or space an algorithm will take for a given input size.

 =>This notation is useful when we want to express the fastest that an algorithm can perform under ideal conditions.

 //Example //

 we using to find no "10" [10,20,30,40,50] using array.

 using Big O Notation => it search the value one by one and finally find the "10". it takes short time to find the values ,so that's why it is called best case.


 //       //

3.Theta Notation (Θ) - Average Case / Tight Bound:

=>Theta Notation (Θ) describes the tight bound of an algorithm, which means it represents both the "upper bound" and the "lower bound".

=> It gives a precise representation of the algorithm's time or space complexity by providing both the "best" and "worst-case" behavior.

=>If an algorithm has a time complexity of Θ(n), it means the algorithm always takes linear time, no matter the input.

//Example //

 we using to find no "30" [10,20,30,40,50] using array.

 using Big O Notation => it search the value one by one and finally find the "30". it takes Min and Max both in between times,and show the results.



 //    Example code for above Trio concepts   //
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Returns the index of the target
    }
  }
  return -1; // Returns -1 if the target is not found
}

let arr = [10, 20, 30, 40, 50];

// Best Case: Target is at the first position
console.log(linearSearch(arr, 10)); // Output: 0 (Ω(1))

// Worst Case: Target is at the last position
console.log(linearSearch(arr, 50)); // Output: 4 (O(n))

// Average Case: Target is in the middle
console.log(linearSearch(arr, 30)); // Output: 2 (Θ(n))


 //             code end                      //



DEEP EXPLANATION:


Big O Notation (O) - Worst Case:

There are 7 types:

1.O(1) - Constant Time:
2.O(n) - Linear Time:
3.O(n²) - Quadratic Time:
4.O(log n) - Logarithmic Time:
5.O(n log n) - Linearithmic Time:
6.O(2ⁿ) - Exponential Time:
7.O(n!) - Factorial Time:

WHERE IT IS USED:
1.O(1) - Constant Time:

=>Hash table lookups
=>Inserting or deleting elements in a stack or queue (at the top or front)

2.O(n) - Linear Time:

=>Iterating through an array or list
=>Linear search in an unsorted array
=>Basic for loops where each element is processed once.

3.O(n²) - Quadratic Time:
 =>Nested loops iterating over all pairs of elements
=>Basic sorting algorithms (Bubble Sort, Selection Sort)

4.O(log n) - Logarithmic Time:
  =>Searching in a sorted array using Binary Search
  =>Algorithms like Divide and Conquer (e.g., Merge Sort)
  =>Operations on balanced trees (e.g., AVL trees, Binary Search Trees)

5.O(n log n) - Linearithmic Time:

=>Efficient sorting algorithms (Merge Sort, Quick Sort)
=>Some graph algorithms (e.g., finding minimum spanning trees using Kruskal's algorithm)

6.O(2ⁿ) - Exponential Time:

=>Recursive algorithms without memoization (e.g., solving combinatorial problems like the Traveling Salesman Problem using brute force).

=>Problems involving all subsets or permutations of a set.

7.O(n!) - Factorial Time:

=>Solving the Traveling Salesman Problem using brute force
=>Generating all permutations/combinations of a set
=>Problems like N-Queens or puzzles where every possible arrangement is evaluated


//               //
1.O(1) - Constant Time:

=>Imagine you have a pizza. No matter how big the pizza is, if you just want to grab one slice, it takes the same amount of time to reach for it.

// Basic code //
let pizza = ["slice1", "slice2", "slice3", "slice4"];
console.log(pizza[0]);  // Grab the first slice: constant time!


=>Whether the pizza has 4 slices or 100 slices, grabbing the first slice always takes the same amount of time.
//          //


2.O(n) - Linear Time:


=>Now imagine you’re taste-testing cookies, one at a time, from a jar. If there are 10 cookies, it’ll take you 10 bites; if there are 100 cookies, it’ll take 100 bites.

=>You keep eating the cookies one by one until you finish them all.


//  Basic code //
let cookies = ["cookie1", "cookie2", "cookie3"];
for (let i = 0; i < cookies.length; i++) {
    console.log("Eating " + cookies[i]);
}   // output: Eating cookie1,Eating cookie2,eating cookie3

=>The more cookies in the jar, the longer it takes to finish them, so the time scales linearly with the number of cookies.
//              //

3.O(n²) - Quadratic Time:

=>Picture this: you're at a party, and you want to high-five every single person there. Not just once, though—you want to high-five everyone twice! For every new person who arrives, you have to go back and high-five everyone again.

=>If 3 people arrive, you’ll give 3 high-fives to each, and then do it again as more people show up.


//  Basic code //
/* let people = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
        console.log(people[i] + " high-fives " + people[j]);
    }
}


//output:
/* Alice high-fives Alice
Alice high-fives Bob
 Alice high-fives Charlie
 Bob high-fives Alice
 Bob high-fives Bob
 Bob high-fives Charlie
 Charlie high-fives Alice
 Charlie high-fives Bob
 Charlie high-fives Charlie */


 =>The more people there are, the more high-fives need to be given! It increases exponentially, doubling up on high-fives as the party grows.

//             //

4.O(log n) - Logarithmic Time:

=>Imagine you're looking for your favorite book in a huge library, but the books are sorted alphabetically. You don’t need to check every book; instead, you jump to the middle shelf, see if your book is before or after, and then keep narrowing down.

=>You don’t check all the books, just half of them at each step!


// Basic code //

function findBook(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return "Found " + target;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return "Not Found";
}
console.log(findBook(["A", "B", "C", "D", "E"], "C"));  // output: Found C

=>You cut the library in half each time, which makes your search super-efficient!

//           //


5.O(n log n) - Linearithmic Time:

=>Imagine you’re organizing a talent show. You have a bunch of contestants, and every round you split them into two groups and sort them by their talents. In the end, you merge them back into one final ranking. The splitting and merging happens repeatedly.


=>You keep splitting contestants into smaller groups and sorting each round.

// BAsic code   //
function sortTalentShow(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sortTalentShow(arr.slice(0, mid));
    let right = sortTalentShow(arr.slice(mid));
    return mergeTalent(left, right);
}
function mergeTalent(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }
    return sorted.concat(left).concat(right);
}
console.log(sortTalentShow(["Guitar", "Dance", "Magic", "Singing", "Comedy"]));


//output:  ['Comedy', 'Dance', 'Guitar', 'Magic', 'Singing']  //

=>You’re splitting the show down to smaller groups repeatedly, then sorting and merging them back, which makes for an efficient event.

//         //

6.
Let’s break down Big O notation with funny, real-life examples to make it more relatable!

O(1) - Constant Time
Imagine you have a pizza. No matter how big the pizza is, if you just want to grab one slice, it takes the same amount of time to reach for it.

Pizza Example:
You don’t care if it’s a small pizza or an extra-large one; you always grab the same slice in one move!

js
Copy code
let pizza = ["slice1", "slice2", "slice3", "slice4"];
console.log(pizza[0]);  // Grab the first slice: constant time!
Explanation: Whether the pizza has 4 slices or 100 slices, grabbing the first slice always takes the same amount of time.

O(n) - Linear Time
Now imagine you’re taste-testing cookies, one at a time, from a jar. If there are 10 cookies, it’ll take you 10 bites; if there are 100 cookies, it’ll take 100 bites.

Cookie Jar Example:
You keep eating the cookies one by one until you finish them all.

js
Copy code
let cookies = ["cookie1", "cookie2", "cookie3"];
for (let i = 0; i < cookies.length; i++) {
    console.log("Eating " + cookies[i]);
}
Explanation: The more cookies in the jar, the longer it takes to finish them, so the time scales linearly with the number of cookies.

O(n²) - Quadratic Time
Picture this: you're at a party, and you want to high-five every single person there. Not just once, though—you want to high-five everyone twice! For every new person who arrives, you have to go back and high-five everyone again.

High-Five Party Example:
If 3 people arrive, you’ll give 3 high-fives to each, and then do it again as more people show up.

js
Copy code
let people = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
        console.log(people[i] + " high-fives " + people[j]);
    }
}
Explanation: The more people there are, the more high-fives need to be given! It increases exponentially, doubling up on high-fives as the party grows.

O(log n) - Logarithmic Time
Imagine you're looking for your favorite book in a huge library, but the books are sorted alphabetically. You don’t need to check every book; instead, you jump to the middle shelf, see if your book is before or after, and then keep narrowing down.

Library Example:
You don’t check all the books, just half of them at each step!

js
Copy code
function findBook(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return "Found " + target;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return "Not Found";
}
console.log(findBook(["A", "B", "C", "D", "E"], "C"));
Explanation: You cut the library in half each time, which makes your search super-efficient!

O(n log n) - Linearithmic Time
Imagine you’re organizing a talent show. You have a bunch of contestants, and every round you split them into two groups and sort them by their talents. In the end, you merge them back into one final ranking. The splitting and merging happens repeatedly.

Talent Show Example:
You keep splitting contestants into smaller groups and sorting each round.

js
Copy code
function sortTalentShow(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sortTalentShow(arr.slice(0, mid));
    let right = sortTalentShow(arr.slice(mid));
    return mergeTalent(left, right);
}
function mergeTalent(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }
    return sorted.concat(left).concat(right);
}
console.log(sortTalentShow(["Guitar", "Dance", "Magic", "Singing", "Comedy"]));

Explanation: You’re splitting the show down to smaller groups repeatedly, then sorting and merging them back, which makes for an efficient event.

//            //

6.O(2ⁿ) - Exponential Time:

=>Imagine you're a wizard learning magic spells, and each spell you learn unlocks two new spells. Every time you learn a new spell, it doubles the amount of studying you have to do.


=>Every spell unlocks two more, so you get overwhelmed with spells fast!


// Basic code //
function learnSpells(level) {
    if (level <= 1) return level;
    return learnSpells(level - 1) + learnSpells(level - 2);
}
console.log(learnSpells(5));  // 5


=>Each level of magic unlocks more spells exponentially, and soon you’re drowning in spells to learn!.

//           //

7.O(n!) - Factorial Time:

=>You want to plan a vacation with your friends. However, you insist on considering every possible itinerary—every city order, flight plan, and meal combo. The number of plans increases astronomically with each new friend joining.


=>As more friends join, the number of possible plans becomes too much to handle!


// Basic code //
/* function vacationPlans(friends) {
    if (friends.length === 1) return [friends];
    let plans = [];
    for (let i = 0; i < friends.length; i++) {
        let current = friends[i];
        let remaining = friends.slice(0, i).concat(friends.slice(i + 1));
        let subPlans = vacationPlans(remaining);
        for (let plan of subPlans) {
            plans.push([current].concat(plan));
        }
    }
    return plans;
}
console.log(vacationPlans(["Alice", "Bob", "Charlie"])); 


// [Array(3), Array(3), Array(3), Array(3), Array(3), Array(3)]
 
(3) ['Alice', 'Bob', 'Charlie']

(3) ['Alice', 'Charlie', 'Bob']
 
(3) ['Bob', 'Alice', 'Charlie']

(3) ['Bob', 'Charlie', 'Alice']
 
(3) ['Charlie', 'Alice', 'Bob']
 
(3) ['Charlie', 'Bob', 'Alice'] */

=>With 3 friends, you can handle it, but as you add more, the number of possible itineraries grows too fast!.

//           //



///           ............... START HERE DSA .......................             /////


///                                                            ///

1.ARRAY:

 // Sub listes //

  1.1.Bubble sort
  1.2.Selection sort
  1.3.Insertion sort
  1.4.Quick sort
  1.5.counting sort
  1.6.Radix sort
  1.7.Merge sort
  1.8.Linear sort
  1.9.Bineary sort
 //             //

  1.1.Bubble sort:

  =>Bubble sort algorithm is a simple sorting technique that compares two adjacent elements in an array and swaps them if they are in the wrong order. It keeps repeating this process until the array is sorted.

  //  Basic code //
    
    const bubbleSort = (arr) => {
let swapped;

do{
    swapped = false;
    for(let i=0; i <arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            [test[i],test[i+1]] = [test[i+1],test[i]];
            swapped = true;

        }

    }

} while (swapped);

return arr;

};

const test = [23,2,73,15,8,99];
console.log(bubbleSort(test));  //output [2,8,15,23,73,99]

  //             //
    
  1.2.Selection sort:

  =>Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning.
   
   // Basic code //

   const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) {
        // swap the elements
        [arr[i],arr[lowest]] = [arr[lowest], arr[i]];
      }
    }
  
    return arr;
}
const values = [27, 3, 7, 1, 0];
console.log(selectionSort(values));   // output: [0,1,3,7,23]


   //           //



  1.3.Insertion sort:

  =>Insertion sort works with sorting the elements while comparing the previous parsed array to put the elements in correct place. It is similar to how you sort playing cards in your hand.

  //Basic code //
  const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let currentElement = array[i];
      let lastIndex = i - 1;
  
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;
      }
      array[lastIndex + 1] = currentElement;
    }
  
    return array;
  };

  

const values = [21,2,1,34,19,0];
console.log(insertionSort(values));  /// [0,1,2,19,21,34]

  //           //
  1.4.Quick sort:

  =>Quick Sort is a divide and conquer algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two groups:

1.Elements less than the pivot go to the left.
2.Elements greater than the pivot go to the right.

=>The pivot is then in its correct position. This process is repeated recursively for the left and right subarrays until the entire array is sorted.

// Basic code //
const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

  let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(quickSort(myArray)); // Output: [1,2,3,4,5,6,7,8]

//            //
  1.5.counting sort:
    
    =>Counting Sort is an integer sorting algorithm that works by counting the occurrences of each distinct element in the array. It is an efficient algorithm when the range of input values (the difference between the maximum and minimum elements) is not too large compared to the number of elements to be sorted.

    =>Counting sort works by creating a count array to store the frequency of each element. After counting the elements, the algorithm computes the position of each element in the sorted output.

    // Basic code //
    function countingSort(arr) {
    // Step 1: Find the maximum value in the array
    const max = Math.max(...arr);
  
    // Step 2: Create and initialize the count array
    const count = new Array(max + 1).fill(0);
  
    // Step 3: Count occurrences of each number
    arr.forEach(num => {
      count[num]++;
    });
  
    // Step 4: Build the sorted output array
    const output = [];
    count.forEach((freq, num) => {
      for (let i = 0; i < freq; i++) {
        output.push(num); // Add the number 'freq' times
      }
    });
  
    return output; // Return the sorted array
  }
  
  // Example usage:
  const arr = [4, 2, 2, 8, 3, 3, 1];
  console.log("Sorted array:", countingSort(arr));  //  [1, 2, 2, 3, 3, 4, 8]
    //            //
  1.6.Radix sort:

  =>Radix Sort is a non-comparative integer sorting algorithm that sorts numbers by processing individual digits. Unlike comparison-based sorting algorithms (like quicksort or mergesort), Radix Sort processes digits one at a time, sorting the numbers based on each digit's value.

  // Basic code //
// Helper function to perform Counting Sort based on a specific digit
function countingSortForRadix(arr, exp) {
  const output = new Array(arr.length); // Output array
  const count = new Array(10).fill(0);  // Count array for digits (0-9)

  // Step 1: Count occurrences of each digit
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] / exp) % 10); // Get digit at 'exp'
    count[index]++;
  }

  // Step 2: Calculate cumulative counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Step 3: Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    const index = Math.floor((arr[i] / exp) % 10); // Get digit at 'exp'
    output[count[index] - 1] = arr[i]; // Place in output array
    count[index]--; // Decrease count
  }

  // Step 4: Copy output array back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

// Main function to implement Radix Sort
function radixSort(arr) {
  // Step 1: Find the maximum number to know the number of digits
  const max = Math.max(...arr);

  // Step 2: Sort for each digit (1s, 10s, 100s, ...)
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp); // Sort based on the current digit
  }

  return arr; // Return the sorted array
}

// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sorted array:", radixSort(arr)); //output [2, 24, 45, 66, 75, 90, 170, 802]


  //            //
  1.7.Merge sort:

  =>Merge Sort is a classic divide-and-conquer sorting algorithm that is efficient and stable. It breaks down an array into smaller subarrays, sorts those subarrays, and then merges them back together in sorted order.

  // Basic code //
  
  function merge(left, right) {
    const merged = []; // Array to hold the merged result
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array
  
    // Step 1: Compare elements from both halves and merge them in sorted order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]); // Add smaller element to merged array
        i++; // Move pointer in left array
      } else {
        merged.push(right[j]); // Add smaller element to merged array
        j++; // Move pointer in right array
      }
    }
  
    // Step 2: If there are remaining elements in the left half, add them to merged
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
  
    // Step 3: If there are remaining elements in the right half, add them to merged
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
  
    return merged; // Return the merged sorted array
  }
  
  // Main function to implement Merge Sort
  function mergeSort(arr) {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Step 1: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half
  
    // Step 2: Merge the sorted halves
    return merge(left, right); // Return the merged sorted array
  }
  
  // Example usage:
  const arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Sorted array:", mergeSort(arr));   //output :  [3, 9, 10, 27, 38, 43, 82]

  //            //
  1.8.Linear sort:

  =>In the linear sort means its complete the task in linear time for example we using in (counting sort ,Bucket sort and Radix sort).


  // Basic code //
function linearSearch(arr, target) {
    // Loop through the array from the first to the last element
    for (let i = 0; i < arr.length; i++) {
        console.log(`Checking index ${i}, value: ${arr[i]}`);

        // If the current element matches the target, return the index
        if (arr[i] === target) {
            console.log(`Element found at index: ${i}`);
            return i; // Return the index where the target is found
        }
    }
    
    // If the loop ends and the target was not found
    console.log("Element not found");
    return -1; // Return -1 to indicate the target was not found
}

// Array to search in
const arr = [2, 7, 8, 4, 6, 3, 9];
// Target value to find
const target = 9;

// Call the linearSearch function and pass the array and target
linearSearch(arr, target);


  //            //

  1.9.Bineary sort:

  =>Binary Search is an algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half, making it significantly faster than a linear search, especially for large datasets.

  // Basic code //
function binarySearch(arr, target) {
    let left = 0; // Starting index
    let right = arr.length - 1; // Ending index

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle index

        // Output current pointers and mid
        console.log(`Left: ${left}, Right: ${right}, Mid: ${mid}, Mid Value: ${arr[mid]}`);

        if (arr[mid] === target) {
            console.log(`Element found at index: ${mid}`); // Target found
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
            console.log(`Searching in the right half: New Left = ${left}`);
        } else {
            right = mid - 1; // Search in the left half
            console.log(`Searching in the left half: New Right = ${right}`);
        }
    }

    console.log("Element not found"); // Target not found
    return -1; 
}

// Sorted array
const arr = [2, 3, 4, 6, 7, 8, 9];
const target = 9; // The target value to find
binarySearch(arr, target);  //9


  //            //

  ///             End                    ////

2.Linked lists:

=>A linked list is a linear data structure consisting of nodes, where each node contains a data element and a reference (link) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, allowing for dynamic memory management and efficient insertions and deletions.



Types:

1.Singly Linked List
2.Doubly Linked List
3.Circular Linked List
4.Circular Doubly Linked List

Types in Details:

1.Singly Linked List:

  => Each node contains a data element and a reference to the next node in the sequence.(example: Bike Petrol ,so we travel 50km only for 100Rs petrol )

  1.Insert a node at the beginning, middle, or end.

    =>We will create the class LinkedList that holds the reference to the head node (the first node of the list).

    // Basic code //
    LinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data);
    
    // If the list is empty, the new node becomes the head
    if (this.head === null) {
        this.head = newNode;
        return;
    }

    // Otherwise, traverse to the end of the list
    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }

    // Add the new node at the end
    current.next = newNode;
};


    //             //
  2.Delete a node by value or position.

  =>Traverse the list and find the node that contains the value.
=>Update the next reference of the previous node to skip the current node.

// Basic code //
LinkedList.prototype.deleteByValue = function(data) {
    if (this.head === null) {
        console.log("The list is empty.");
        return;
    }

    // If the head node holds the value, update the head
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }

    // Traverse the list and find the node to delete
    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next; // Skip the node
            return;
        }
        current = current.next;
    }

    console.log("Node not found.");
};

//             //
  3.Traverse the list (print all values).
  
  =>To traverse the list, we simply start at the head and follow the next references until we reach the end.

  // Basic code //
   LinkedList.prototype.traverse = function() {
    let current = this.head;

    // Loop through the list and print each node's data
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
};

  //            //
  4.Search for a node by value.

  =>To search for a node by its value, traverse the list and check each node’s data value.

// Basic code ///
LinkedList.prototype.search = function(data) {
    let current = this.head;
    
    // Traverse through the list
    while (current !== null) {
        if (current.data === data) {
            console.log(`Node with data ${data} found.`);
            return current; // Return the node
        }
        current = current.next;
    }

    console.log("Node not found.");
    return null; // If the node was not found
};


//              //


2.Doubly Linked List:

=>Each node contains references to both the next and previous nodes, enabling bidirectional traversal.
(example: mmusic app ,to play pre and next song to change that ).

STRUTURE  CODE:

// code //
class Node {
    constructor(data) {
        this.data = data;  // The value stored in the node
        this.next = null;  // Pointer to the next node
        this.prev = null;  // Pointer to the previous node
    }
}

//      //

// Basic code //
class DoublyLinkedList {
    constructor() {
        this.head = null; // Head points to the first node
        this.tail = null; // Tail points to the last node
    }

    // Insert at the end
    insertAtEnd(data) {
        const newNode = new Node(data);

        // If the list is empty, the new node is both head and tail
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link the new node to the current tail and update the tail
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Insert at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);

        // If the list is empty, the new node is both head and tail
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link the new node to the current head and update the head
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Traverse from head to tail
    traverseForward() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Traverse from tail to head
    traverseBackward() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Example usage of Doubly Linked List
const dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtBeginning(5);

console.log("Traverse Forward:");
dll.traverseForward();

console.log("Traverse Backward:");
dll.traverseBackward();


//            //
3.Circular Linked List:

=>The last node points back to the first node, forming a circular structure.
(example: clock).

STRUTURE CODE:

// code //
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


//        //

// basic code //
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the circular linked list
    insertAtEnd(data) {
        const newNode = new Node(data);

        // If the list is empty, the new node points to itself (circular link)
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            // Traverse to the last node and link it to the new node
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }

            // Link the last node to the new node, and the new node back to the head
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    // Traverse the circular linked list
    traverse() {
        if (this.head === null) return;

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example usage of Circular Linked List
const cll = new CircularLinkedList();
cll.insertAtEnd(10);
cll.insertAtEnd(20);
cll.insertAtEnd(30);

console.log("Circular Linked List:");
cll.traverse();

//            //

4.Circular Doubly Linked List:

=>A circular doubly linked list is a type of linked list where each node is connected to both its previous and next nodes, and the last node links back to the first node. This structure allows for efficient bidirectional traversal and looping through the list.

STRUTURE CODE:

// Code //
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


//      //

// Basic code //
class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the circular doubly linked list
    insertAtEnd(data) {
        const newNode = new Node(data);

        // If the list is empty, the new node points to itself (circular link)
        if (this.head === null) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            // Tail is the previous node of the head
            const tail = this.head.prev;

            // Link the new node between tail and head
            newNode.prev = tail;
            newNode.next = this.head;
            tail.next = newNode;
            this.head.prev = newNode;
        }
    }

    // Traverse the circular doubly linked list forward
    traverseForward() {
        if (this.head === null) return;

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    // Traverse the circular doubly linked list backward
    traverseBackward() {
        if (this.head === null) return;

        let current = this.head.prev;  // Start from the tail
        do {
            console.log(current.data);
            current = current.prev;
        } while (current !== this.head.prev);
    }
}

// Example usage of Circular Doubly Linked List
const cdll = new CircularDoublyLinkedList();
cdll.insertAtEnd(10);
cdll.insertAtEnd(20);
cdll.insertAtEnd(30);

console.log("Traverse Forward (Circular Doubly Linked List):");
cdll.traverseForward();

console.log("Traverse Backward (Circular Doubly Linked List):");
cdll.traverseBackward();


// output//

Traverse Forward (Circular Doubly Linked List):
10
20
30
Traverse Backward (Circular Doubly Linked List):
30
20
10


//             //

Important Topics for Linked Lists in DSA


1.Insertion (at the beginning, middle, end)
2.Deletion (at the beginning, middle, end)
3.Traversal (iterating over the list)
4.Searching (finding a node by value)


//             End               /////////

3.Stack:

=>Stacks are a fundamental data structure in programming that follow the LIFO (Last In, First Out) principle. This means the most recently added element is the first one to be removed. Stacks are used in many real-world applications, such as undo mechanisms in text editors, parsing expressions, and managing function calls in recursion.

 Stack Operations:

A stack generally supports the following operations:

1.Push: Add an element to the top of the stack.
2.Pop: Remove the top element from the stack.
3.Peek (Top): Look at the top element without removing it.
4.isEmpty: Check if the stack is empty.
5.size: Check how many elements are in the stack.

Types of Stacks

1.Array-Based Stack:
//  Basic code //
class Stack {
    constructor() {
        this.items = [];  // Array to hold the stack elements
    }

    // Push: Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Pop: Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek: Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size: Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // printStack: Utility method to display the stack
    printStack() {
        console.log(this.items.toString());
    }
}

// Example usage of the Stack
const stack = new Stack();

console.log("Is stack empty? ", stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element (peek): ", stack.peek()); // 30

stack.printStack();  // 10,20,30

console.log("Size of stack: ", stack.size()); // 3

console.log("Pop element: ", stack.pop()); // 30

stack.printStack();  // 10,20

console.log("Is stack empty? ", stack.isEmpty()); // false


//output//

Is stack empty?  true
Top element (peek):  30
10,20,30
Size of stack:  3
Pop element:  30
10,20
Is stack empty?  false


//              //
2.Linked List-Based Stack:

//  Basic code//
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;  // Top points to the last added element (top of stack)
        this.count = 0;   // Keep track of the number of elements in the stack
    }

    // Push: Add an element to the top of the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;  // Link the new node to the top
        this.top = newNode;       // Update the top to the new node
        this.count++;
    }

    // Pop: Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const removedNode = this.top;  // Get the top node
        this.top = this.top.next;      // Update the top to the next node
        this.count--;
        return removedNode.data;       // Return the removed node's data
    }

    // Peek: Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.data;
    }

    // isEmpty: Check if the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // size: Return the number of elements in the stack
    size() {
        return this.count;
    }

    // Print the stack elements
    printStack() {
        let current = this.top;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage of Linked List-based Stack
const stackLL = new StackLinkedList();

console.log("Is stack empty? ", stackLL.isEmpty()); // true

stackLL.push(10);
stackLL.push(20);
stackLL.push(30);

console.log("Top element (peek): ", stackLL.peek()); // 30

stackLL.printStack();  // 30,20,10

console.log("Pop element: ", stackLL.pop()); // 30

stackLL.printStack();  // 20,10

console.log("Size of stack: ", stackLL.size()); // 2


//output//

Is stack empty?  true
Top element (peek):  30
30
20
10
Pop element:  30
20
10
Size of stack:  2

//             //
3.Two Stacks in One Array:

//Basic code //

class TwoStacks {
    constructor(size) {
        this.size = size;           // Total size of the array
        this.arr = new Array(size);  // The array to hold both stacks
        this.top1 = -1;              // Top of Stack 1 (starts from -1 since stack is empty)
        this.top2 = size;            // Top of Stack 2 (starts from the end of the array)
    }

    // Push an element to Stack 1
    push1(data) {
        // Check if there is space between Stack 1 and Stack 2
        if (this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = data;
        } else {
            console.log("Stack Overflow in Stack 1");
        }
    }

    // Push an element to Stack 2
    push2(data) {
        // Check if there is space between Stack 1 and Stack 2
        if (this.top1 < this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = data;
        } else {
            console.log("Stack Overflow in Stack 2");
        }
    }

    // Pop an element from Stack 1
    pop1() {
        if (this.top1 >= 0) {
            let poppedElement = this.arr[this.top1];
            this.top1--;
            return poppedElement;
        } else {
            return "Stack Underflow in Stack 1";
        }
    }

    // Pop an element from Stack 2
    pop2() {
        if (this.top2 < this.size) {
            let poppedElement = this.arr[this.top2];
            this.top2++;
            return poppedElement;
        } else {
            return "Stack Underflow in Stack 2";
        }
    }

    // Peek at the top element of Stack 1
    peek1() {
        if (this.top1 >= 0) {
            return this.arr[this.top1];
        } else {
            return "Stack 1 is empty";
        }
    }

    // Peek at the top element of Stack 2
    peek2() {
        if (this.top2 < this.size) {
            return this.arr[this.top2];
        } else {
            return "Stack 2 is empty";
        }
    }

    // Print the elements of Stack 1
    printStack1() {
        if (this.top1 >= 0) {
            console.log("Stack 1: ");
            for (let i = 0; i <= this.top1; i++) {
                console.log(this.arr[i]);
            }
        } else {
            console.log("Stack 1 is empty");
        }
    }

    // Print the elements of Stack 2
    printStack2() {
        if (this.top2 < this.size) {
            console.log("Stack 2: ");
            for (let i = this.top2; i < this.size; i++) {
                console.log(this.arr[i]);
            }
        } else {
            console.log("Stack 2 is empty");
        }
    }
}

// Example usage of Two Stacks in One Array
const twoStacks = new TwoStacks(10);

twoStacks.push1(10);
twoStacks.push1(20);
twoStacks.push1(30);

twoStacks.push2(100);
twoStacks.push2(200);
twoStacks.push2(300);

console.log("After pushing to both stacks:");
twoStacks.printStack1();  // Output: Stack 1: 10, 20, 30
twoStacks.printStack2();  // Output: Stack 2: 300, 200, 100

console.log("\nPopping from Stack 1: ", twoStacks.pop1()); // 30
console.log("Popping from Stack 2: ", twoStacks.pop2()); // 300

console.log("\nAfter popping one element from both stacks:");
twoStacks.printStack1();  // Output: Stack 1: 10, 20
twoStacks.printStack2();  // Output: Stack 2: 200, 100

///          //

Types of Stacks in Detailed:

1.Array-Based Stack:
2.Linked List-Based Stack:
3.Two Stacks in One Array:

Important Topics for Stacks in DSA

1.Push: Add an element to the top of the stack.
2.Pop: Remove the top element from the stack.
3.Peek/Top: View the top element without removing it.
4.isEmpty: Check if the stack is empty.
5.isFull: Check if the stack is full (in case of array-based implementation).


//            END                ///

4.Queues:

=>Queues work in a very similar way to stacks, but elements follow a different pattern for add and removal. Queues allow only a FIFO pattern (first in, first out). In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.

=>To understand this, picture people making a queue to buy food. The logic here is that if you get the the queue first, you'll be the first to be served. If you get there first, you'll be the first out. FIFO

Types of Queues:

1.Simple Queue (Linear Queue):
2.Circular Queue:
3.Priority Queue:
4.Deque (Double-Ended Queue):
5.Blocking Queue:
6.Double-Ended Priority Queue:


Types of Queues Detailed:

1.Simple Queue (Linear Queue):

=>A Simple Queue (also known as a Linear Queue) follows the FIFO (First In, First Out) principle. In this type of queue, elements are added at the rear (end) and removed from the front (beginning). Once an element is dequeued, that position cannot be reused, meaning the queue grows in one direction.

// Basic code //
class SimpleQueue {
    constructor() {
        this.items = [];
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Removes and returns the first element
    }

    // Return the front element without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue
    printQueue() {
        console.log(this.items.toString());
    }
}

// Example usage:
const queue = new SimpleQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue:", queue.items);  // [1, 2, 3]
console.log("Dequeue:", queue.dequeue());  // 1
queue.printQueue();  // [2, 3]


//            //
2.Circular Queue:

=>A Circular Queue is a more efficient version of a linear queue. It uses a fixed-size array and treats the array as if it were circular. When the rear pointer reaches the end of the array, it wraps around to the front if there is space. This makes better use of memory compared to the linear queue.

//Basic code //

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            return "Queue is full";
        } else if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.items[this.rear] = element;
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.front === -1) {
            return "Queue is empty";
        }
        let element = this.items[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === -1;
    }

    // Check if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // Print the queue
    printQueue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let i = this.front;
        let queueStr = '';
        while (i !== this.rear) {
            queueStr += this.items[i] + ' ';
            i = (i + 1) % this.size;
        }
        queueStr += this.items[this.rear];
        console.log(queueStr);
    }
}

// Example usage:
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.printQueue();  // 1 2 3 4
circularQueue.dequeue();
circularQueue.printQueue();  // 2 3 4

//           //
3.Priority Queue:

=>A Priority Queue is a type of queue where each element is associated with a priority. Elements with higher priority are dequeued before elements with lower priority. If two elements have the same priority, they are dequeued based on their order in the queue (FIFO for elements with equal priority).

// Basic code //
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Add an element with a priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        // Insert the new element in the correct place based on priority
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        // If the new element has the highest priority (or queue is empty), add it at the end
        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Remove and return the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Remove the first element (highest priority)
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the queue
    printQueue() {
        this.items.forEach(item => {
            console.log(`${item.element} - Priority: ${item.priority}`);
        });
    }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);

console.log("Priority Queue:");
priorityQueue.printQueue();  // Task 2 - Priority: 1, Task 1 - Priority: 2, Task 3 - Priority: 3

console.log("Dequeue:", priorityQueue.dequeue().element);  // Task 2

//            //
4.Deque (Double-Ended Queue):

=>A Deque (Double-Ended Queue) allows elements to be added or removed from both the front and the rear. It’s like a hybrid between a stack and a queue.

//Basic code //
class Deque {
    constructor() {
        this.items = [];
    }

    // Add an element to the front
    enqueueFront(element) {
        this.items.unshift(element);
    }

    // Add an element to the rear
    enqueueRear(element) {
        this.items.push(element);
    }

    // Remove an element from the front
    dequeueFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.shift();
    }

    // Remove an element from the rear
    dequeueRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items.pop();
    }

    // Check if the deque is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the deque
    printDeque() {
        console.log(this.items.toString());
    }
}

// Example usage:
const deque = new Deque();
deque.enqueueRear(1);
deque.enqueueRear(2);
deque.enqueueFront(0);
deque.printDeque();  // 0,1,2
deque.dequeueFront();  // 0
deque.printDeque();  // 1,2
deque.dequeueRear();  // 2
deque.printDeque();  // 1


//            //
5.Blocking Queue:

=>A Blocking Queue is a type of queue that blocks when trying to add elements to a full queue or when trying to remove elements from an empty queue. It is commonly used in multi-threaded or concurrent applications where threads need to wait for availability.

// BAsic code //

class BlockingQueue {
    constructor(capacity) {
        this.capacity = capacity; // Maximum capacity of the queue
        this.queue = [];          // Store queue elements
        this.resolveEnqueue = null;
        this.resolveDequeue = null;
    }

    // Asynchronously add an element to the queue (if full, it will wait)
    async enqueue(element) {
        if (this.queue.length >= this.capacity) {
            await new Promise(resolve => {
                this.resolveEnqueue = resolve;
            });
        }

        this.queue.push(element);

        // If there was a dequeue waiting, resolve it
        if (this.resolveDequeue) {
            this.resolveDequeue();
            this.resolveDequeue = null;
        }
    }

    // Asynchronously remove an element from the queue (if empty, it will wait)
    async dequeue() {
        if (this.queue.length === 0) {
            await new Promise(resolve => {
                this.resolveDequeue = resolve;
            });
        }

        const element = this.queue.shift();

        // If there was an enqueue waiting, resolve it
        if (this.resolveEnqueue) {
            this.resolveEnqueue();
            this.resolveEnqueue = null;
        }

        return element;
    }

    // Get the current size of the queue
    size() {
        return this.queue.length;
    }

    // Check if the queue is full
    isFull() {
        return this.queue.length >= this.capacity;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example usage:
const blockingQueue = new BlockingQueue(2);

(async () => {
    // Enqueue elements
    blockingQueue.enqueue(1);
    blockingQueue.enqueue(2);

    // This will block until an element is dequeued
    console.log('Queue full, waiting to enqueue 3...');
    blockingQueue.enqueue(3).then(() => console.log('Enqueued 3'));

    // Dequeue elements
    console.log('Dequeued:', await blockingQueue.dequeue());  // Output: 1
    console.log('Dequeued:', await blockingQueue.dequeue());  // Output: 2
    console.log('Dequeued:', await blockingQueue.dequeue());  // Output: 3
})();

//             //

6.Double-Ended Priority Queue:

=>A Double-Ended Priority Queue is a type of priority queue that allows for the removal of both the highest and lowest priority elements from either end.

// Basic code //
class DoubleEndedPriorityQueue {
    constructor() {
        this.items = [];
    }

    // Add an element with a priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        // Insert element at the correct position based on its priority
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);  // Add at the end if it's the lowest priority
        }
    }

    // Remove and return the element with the highest priority
    dequeueHighest() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Remove the first element (highest priority)
    }

    // Remove and return the element with the lowest priority
    dequeueLowest() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.pop();  // Remove the last element (lowest priority)
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the queue
    printQueue() {
        this.items.forEach(item => {
            console.log(`${item.element} - Priority: ${item.priority}`);
        });
    }
}

// Example usage:
const doubleEndedQueue = new DoubleEndedPriorityQueue();
doubleEndedQueue.enqueue("Task A", 3);
doubleEndedQueue.enqueue("Task B", 2);
doubleEndedQueue.enqueue("Task C", 5);
doubleEndedQueue.enqueue("Task D", 1);

console.log("Priority Queue:");
doubleEndedQueue.printQueue();
// Task D - Priority: 1
// Task B - Priority: 2
// Task A - Priority: 3
// Task C - Priority: 5

console.log("Dequeue Highest Priority:", doubleEndedQueue.dequeueHighest().element);  // Task D
console.log("Dequeue Lowest Priority:", doubleEndedQueue.dequeueLowest().element);    // Task C

doubleEndedQueue.printQueue();  // Task B - Priority: 2, Task A - Priority: 3

//              //

Important Topics for Queues in DSA

1.Enqueue: Add an element to the rear of the queue.
2.Dequeue: Remove an element from the front of the queue.
3.Front: Get the front element of the queue without removing it.
4.Rear: Get the last element of the queue.
5.isEmpty: Check if the queue is empty.
6.isFull: Check if the queue is full (in case of a fixed size).


//            End         //

5.Binary trees:


Types:

1.Full Binary Tree:
2.Perfect Binary Tree:
3.Complete Binary Tree:
4.Balanced Binary Tree:
5.Degenerate (or Pathological) Tree:
6.Binary Search Tree (BST):
7.AVL Tree:
8.Red-Black Tree:

Types Detailed:

1.Full Binary Tree: Each node has either 0 or 2 children.
2.Perfect Binary Tree: All leaves are at the same level, and all nodes have two children.
3.Complete Binary Tree: All levels are completely filled except possibly the last level.
4.Balanced Binary Tree: The height difference between the left and right subtree for every node is at most 1.
5.Degenerate Tree: Each parent node has only one child.
6.Binary Search Tree (BST): For each node, the left subtree values are smaller, and the right subtree values are larger.
6.AVL Tree: A self-balancing BST with a height difference constraint.
7.Red-Black Tree: A self-balancing BST that maintains balance using colors (Red/Black).

Important Topics for Binary Trees in DSA

1.Tree Traversals:
2.Insertion and Deletion in Binary Search Tree (BST):
3.Check if a Tree is Balanced:
4.Find the Height/Depth of a Binary Tree:
5.Lowest Common Ancestor (LCA):




///                      END                ///

6.Hash tables:

=>Hash Table is a data structure used for storing key-value pairs. It uses a hash function to map keys to indices in an array where the values are stored. If two keys hash to the same index, a collision occurs, and various methods handle collisions.

Types:

1.Direct address
2.chaining hash table
3.Open Addressing Hash Table
4.Perfect Hashing 
5.Dynamic Hashing (Extendible/Expandable Hashing)

Types in deatiled :

1.Direct address:

=>Direct Address Table, each possible key maps directly to a unique index in an array. This method assumes that keys are from a relatively small, fixed range. It is efficient for small, fixed domains but can be inefficient for large key spaces.

// Basic code //
class DirectAddressTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
    }

    insert(key, value) {
        this.table[key] = value;
    }

    search(key) {
        return this.table[key];
    }

    delete(key) {
        this.table[key] = null;
    }
}

let directTable = new DirectAddressTable(5);
directTable.insert(0, "Alice");
directTable.insert(2, "Bob");
console.log(directTable.search(2));  // Output: "Bob"
directTable.delete(2);
console.log(directTable.search(2));  // Output: null

//              //
2.chaining hash table:

=>Chaining is a technique to resolve collisions. In this method, each slot in the hash table points to a linked list (or another data structure) of keys that hash to the same index.

Example:
For keys {15, 25, 35} and a hash function h(k) = k % 10:

h(15) = h(25) = h(35) = 5, so all keys are chained together at index 5.

// BAsic code //
class ChainingHashTable {
    constructor(size) {
        this.table = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        return key % this.table.length;
    }

    insert(key, value) {
        const index = this.hash(key);
        this.table[index].push({ key, value });
    }

    search(key) {
        const index = this.hash(key);
        for (let item of this.table[index]) {
            if (item.key === key) return item.value;
        }
        return null;
    }

    delete(key) {
        const index = this.hash(key);
        this.table[index] = this.table[index].filter(item => item.key !== key);
    }
}

let chainTable = new ChainingHashTable(10);
chainTable.insert(15, "Alice");
chainTable.insert(25, "Bob");
console.log(chainTable.search(25));  // Output: "Bob"
chainTable.delete(25);
console.log(chainTable.search(25));  // Output: null


//             //
3.Open Addressing Hash Table:

=>Open Addressing is a collision resolution technique where, upon a collision, alternative cells are probed (checked) for an empty spot in the table.

Types of Open Addressing:
Linear Probing: Check the next index (i.e., hash(key) + 1 % size).
Quadratic Probing: Use quadratic steps (i.e., hash(key) + i²).
Double Hashing: Use a secondary hash function to determine the step size.

// Basic code //
class OpenAddressingHashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
    }

    hash(key) {
        return key % this.table.length;
    }

    insert(key, value) {
        let index = this.hash(key);
        while (this.table[index] !== null) {
            index = (index + 1) % this.table.length;
        }
        this.table[index] = { key, value };
    }

    search(key) {
        let index = this.hash(key);
        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.table.length;
        }
        return null;
    }

    delete(key) {
        let index = this.hash(key);
        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                this.table[index] = null;
                return;
            }
            index = (index + 1) % this.table.length;
        }
    }
}

let openHashTable = new OpenAddressingHashTable(10);
openHashTable.insert(15, "Alice");
openHashTable.insert(25, "Bob");
console.log(openHashTable.search(25));  // Output: "Bob"
openHashTable.delete(25);
console.log(openHashTable.search(25));  // Output: null

//            //
4.Perfect Hashing :

=>Perfect Hashing is a type of hashing where collisions do not occur. This is usually achieved by constructing a minimal perfect hash function that maps keys to unique indices without any collisions.

Example:
Suppose you have a known set of keys {k1, k2, k3} and you want to create a hash function that perfectly maps them to different indices.
//   Basic code //
class PerfectHashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
    }

    perfectHash(key) {
        // Example simple perfect hash function for demonstration
        return key % this.table.length;
    }

    insert(key, value) {
        const index = this.perfectHash(key);
        this.table[index] = { key, value };
    }

    search(key) {
        const index = this.perfectHash(key);
        if (this.table[index] && this.table[index].key === key) {
            return this.table[index].value;
        }
        return null;
    }
}

let perfectHashTable = new PerfectHashTable(10);
perfectHashTable.insert(7, "Alice");
console.log(perfectHashTable.search(7));  // Output: "Alice"


//               //

5.Dynamic Hashing (Extendible/Expandable Hashing):

=>Dynamic Hashing is a technique used when the size of the dataset is not known in advance. It allows the hash table to grow or shrink as the data changes. This is useful in databases and file systems.

Example of Extendible Hashing:
The hash table grows in size and reorganizes when the number of entries exceeds a certain threshold.

// Basic code //
class DynamicHashTable {
    constructor(initialSize = 4) {
        this.size = initialSize;
        this.table = new Array(this.size).fill(null);
        this.count = 0;
    }

    hash(key) {
        return key % this.size;
    }

    insert(key, value) {
        if (this.count === this.size) {
            this.resize();
        }

        let index = this.hash(key);
        while (this.table[index] !== null) {
            index = (index + 1) % this.size;
        }
        this.table[index] = { key, value };
        this.count++;
    }

    search(key) {
        let index = this.hash(key);
        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
        }
        return null;
    }

    resize() {
        this.size *= 2;
        const oldTable = this.table;
        this.table = new Array(this.size).fill(null);
        this.count = 0;

        for (let item of oldTable) {
            if (item !== null) {
                this.insert(item.key, item.value);
            }
        }
    }
}

let dynamicHashTable = new DynamicHashTable();
dynamicHashTable.insert(1, "Alice");
dynamicHashTable.insert(2, "Bob");
dynamicHashTable.insert(3, "Charlie");
dynamicHashTable.insert(4, "Dave");
console.log(dynamicHashTable.search(2));  // Output: "Bob"


//            //


EXPAND:

1.Starting with an array.
2.Storing names using a hash function.
3.Looking up an element using a hash function.
4.Handling collisions.
The basic Hash Set code.


//                     //








/////                    ...............END................      /////




