// TOP 50 BASIC INTERVIEW CODING QA USING JAVASCRIPT //

//1.Reverse a Number //
/* function reverse(nums){
    console.log(parseInt(nums.toString().split('').reverse().join('')));
}
reverse(123456789); //123456789   */
//    //

//2.Fibonacci Series up to nth Term  //
   // F(n)=F(n−1)+F(n−2) //
  /*  function fibonacci(n){
    let series = [0,1];
    for( let i=2; i<n; i++)
        series.push(series[i-1] + series[i-2]);
    console.log(series.slice(0,n));
    
   }

fibonacci(10);  //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34] */

//     //

//3.Greatest Common Divisor (GCD) //
    //  GCD(a,b)=GCD(b,a%b) formula 

    // to find the GCD of 48 and 18: 

   /*  48%18=12 (so, a = 18, b = 12),
    18%12=6 (so, a = 12, b = 6),
    12%6=0 (so, a = 6, b = 0),

    At this point, b is 0, so the GCD is a, which is 6. */

    /* function gcd(a,b){
        while (b) [a,b] = [b,a%b];
        console.log(a);
        
    }
    gcd(48,18);  // 6 */


    ///     // 


// 4.Perfect Number //

// Divisors of 28: 1, 2, 4, 7, 14 ,
 // sum of Divisors: 1+2+4+7+14=28. 
//Since the sum equals the number, 28 is a perfect number.

/* function perfect(nums){
    let sum = 0;
    for(let i=1; i <nums; i++)
        if(nums % i === 0)
            sum +=i;
        return sum === nums;
}
console.log(perfect(28));  //true
console.log(perfect(12));  //false */


//5.Check if Two Strings are Anagram //
/* function anagram(str1,str2){
    console.log(str1.split('').sort().join('') == str2.split('').sort().join('') );
    
}
anagram('listen','silent'); //true
anagram('racecar','carracing');  //false */


//    //


//6.Check if a String is Palindrome //
/* function Palindrome(str){
    console.log(str == str.split('').reverse().join(''));
    
}
Palindrome('madam'); //madam  */

//  //
//7.Calculate Frequency of Characters in a String //
/* function frequen(str){
    console.log([...str].reduce((freq,char) => (freq[char] = (freq[char] || 0)+1 ,freq),{}));
    
}

 frequen('helllo'); //{h: 1, e: 1, l: 3, o: 1} */ 

 //  //

 //8.Check if Two Strings Match with Wildcard Characters  skip this //

 //9.Bubble Sort //
/*  function bubble(arr){
    for(let i=0; i <arr.length; i++)
        for(let j=0; j <arr.length - i - 1; j++)
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    return arr;
 }
 
 console.log(bubble([64, 34, 25, 12, 22, 11, 90])); //[11, 12, 22, 25, 34, 64, 90] */

 ///    //

 //10.Merge Sort Algorithm //

 /* function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
  function merge(left, right) {
    const result = [];
    while (left.length && right.length) result.push(left[0] <= right[0] ? left.shift() : right.shift());
    return result.concat(left, right);
  }
  console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8] */

  //   //
   

//11.leap year //
/* function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
console.log(isLeapYear(2024)); // true (2024 is a leap year)
console.log(isLeapYear(1900)); // false (1900 is not a leap year)
console.log(isLeapYear(2000)); // true (2000 is a leap year)  */


//   //


//12.Find Non-Repeating Characters in a String


  /* function nonReapte(str){
    console.log([...str].filter(char => str.indexOf(char) == str.lastIndexOf(char)));
  }
  nonReapte('google'); // ['l','e'] */

  //     //

  //13.Replace a Substring in a String //
  /* function replaceSubstring(str, search, replacement) {
    console.log(str.split(search).join(replacement));
  }
  replaceSubstring('hello china', 'china', 'console'); // Output: hello console */

  //    //

  //14.Heap Sort //
/* function heapSort(arr) {
  function heapify(arr, n, i) {
    let largest = i, left = 2 * i + 1, right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest !== i) [arr[i], arr[largest]] = [arr[largest], arr[i]], heapify(arr, n, largest);
  }
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) heapify(arr, arr.length, i);
  for (let i = arr.length - 1; i > 0; i--) [arr[0], arr[i]] = [arr[i], arr[0]], heapify(arr, i, 0);
  console.log(arr);
}
heapSort([5, 3, 8, 4, 2]); // Output: [2, 3, 4, 5, 8] */ 
//    //

//15.Replace Each Element in an Array by Its Rank //
/* function replaceByRank(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    console.log(arr.map(x => sorted.indexOf(x) + 1));
  }
  replaceByRank([40, 10, 20, 43]); // Output: [4, 1, 2, 3] */ //{10: 1, 20: 2, 30: 3, 40: 4}

  //     //

  //16.Circular Rotation of an Array by K Positions //
  /* function circularRotation(arr, k) {
    k = k % arr.length;
    console.log([...arr.slice(-k), ...arr.slice(0, -k)]);
  }
  circularRotation([1, 2, 3, 4, 5], 2); // Output: [4, 5, 1, 2, 3] */

  //  //

  //17.Find Non-Repeating Elements in an Array //
  /* function nonRepeatingElements(arr) {
    console.log(arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)));
  }
  nonRepeatingElements([1, 2, 2, 3, 3, 4]); // Output: [1, 4] */
  //    //

  //18.Check for the Longest Palindrome in an Array //
/*   function longestPalindrome(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
    console.log(arr.filter(isPalindrome).reduce((a, b) => a.length >= b.length ? a : b, ''));
  }
  longestPalindrome(['abc', 'radar', 'level','racecar']); // Output: radar  // */

  //   //

  //19.Find the Factorial of a Number //
    /// n!=n×(n−1)! /// formula
   /*  function factorial(n) {
      let result = 1; // Initialize result
      for (let i = 2; i <= n; i++) {
          result *= i; // Multiply result by current number
      }
      return result;
  }
  
  // Example usage:
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1 */
  
  

  //    //

  //20.Armstrong Number //
  /* function isArmstrong(num) {
    const sum = num.toString().split('').reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
    console.log(sum === num);
  }
  isArmstrong(153); // Output: true */
   

  // all armstrong number //
  /* function isArmstrong(num) {
    const digits = String(num).split('');  // Convert number to array of digits
    const power = digits.length;           // Number of digits (power)
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0); // Sum of digits raised to the power
    return sum == num;                     // Return true if sum equals the number
}

function findAllArmstrong(limit) {
    let armstrongNumbers = [];
    for (let i = 0; i <= limit; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);      // Add Armstrong number to the list
        }
    }
    return armstrongNumbers;
}

// Find Armstrong numbers up to 9999
console.log(findAllArmstrong(9999)); */

//    //


//21.Sum of Natural Numbers using Recursion //

//Sum(n)=n+Sum(n−1) 

/* function sumOfNaturalNumbers(n) {
  if (n === 1) return 1; // Base case: sum of first natural number is 1
  return n + sumOfNaturalNumbers(n - 1); // Recursive case
}

// Example usage:
console.log(sumOfNaturalNumbers(5)); // Output: 15 //5+4+3+2+1=15.
console.log(sumOfNaturalNumbers(10));
console.log(sumOfNaturalNumbers(6)); // Output: 55 */

///    //

//22.Add Two Matrices //
 // C[i][j]=A[i][j]+B[i][j] //
/* function addMatrices(mat1, mat2) {
  console.log(mat1.map((row, i) => row.map((val, j) => val + mat2[i][j])));
}
addMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]); // Output: [[6, 8], [10, 12]] */
//     //

//23.Sum of Natural Numbers using Recursion //
/* function sumOfNaturalNumbers(n) {
  if (n === 1) return 1;  // Base case: if n is 1, return 1
  return n + sumOfNaturalNumbers(n - 1);  // Recursive case
}

// Example usage:
console.log(sumOfNaturalNumbers(5));  // Output: 15
console.log(sumOfNaturalNumbers(10)); // Output: 55 */
//    //

//24.Check if a String is Palindrome //
/* function isPalindrome(str) {
  console.log(str === str.split('').reverse().join(''));
}
isPalindrome('madam'); // Output: true */

//25.Binary to Decimal Conversion //
/* function binary(bin){
  console.log(parseInt(bin,2));
  
}
binary(1010100011); //675 */
///    //

//26.Check if a Character is a Vowel or Consonant //
/* function isVowelOrConsonant(char) {
  console.log('aeiou'.includes(char.toLowerCase()) ? 'Vowel' : 'Consonant');
}
isVowelOrConsonant('e'); // Output: Vowel */
//     //

//27.Find an Automorphic Number //
 
//An Automorphic number is a number whose square ends with the same digits as the number itself. For example, 
//5
//5 is an Automorphic number because
/* function isAutomorphic(n) {
  const square = n * n; // Calculate the square of the number
  return String(square).endsWith(String(n)); // Check if square ends with the original number
}

// Example usage:
console.log(isAutomorphic(5));    // Output: true
console.log(isAutomorphic(25));   // Output: true
console.log(isAutomorphic(76));   // Output: true
console.log(isAutomorphic(7));    // Output: false */

//    //

//28.Find the ASCII Value of a Character //
/* function asciiValue(char) {
  console.log(char.charCodeAt(0));
}
asciiValue('A'); // Output: 65 */
//   //

//29.Remove All Characters from String Except Alphabets //
/* function removeNonAlphabets(str) {
  console.log(str.replace(/[^a-zA-Z]/g, ''));
}
removeNonAlphabets('a1b2c3'); // Output: abc */ 
//  //

// 30.Print the Smallest Element of the Array //
/* function smallestElement(arr) {
  console.log(Math.min(...arr));
}
smallestElement([5, 3, 8, 4, 2]); // Output: 2 */

//31.Reverse the Elements of the Array //
/* function reverse(arr){
  console.log(arr.reverse());
  
}
reverse([6,5,4,3,2,1]); */ // 1,2,3,4,5,6 output

//32.sort array //

/* function sorting(arr){
  console.log(arr.sort((a,b) => a-b));
  
}
sorting([2,5,8,7,11,9]); // [2, 5, 7, 8, 9, 11] */
//    //

//33.Sort the Elements of the Array Without Sort Method //
/* function sortArrayWithoutSort(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  console.log(arr);
}
sortArrayWithoutSort([5, 3, 8, 4, 2]); // Output: [2, 3, 4, 5, 8] */

//    //

//34.Replace a Substring in a String //
/* function replaceSubstring(str, search, replacement) {
  console.log(str.split(search).join(replacement));
}
replaceSubstring('hello world', 'world', 'there'); // Output: hello there */
//  //

//35.Remove Spaces from a String //
/* function removeSpace(str){
  console.log(str.replace(/\n+/g,''));
  
}
removeSpace('f i n d'); //output  find */

//   //

//36.Count Inversions //
/* function countInversions(arr) {
  let count = 0;  // Initialize the inversion count
  
  // Outer loop to iterate through each element
  for (let i = 0; i < arr.length; i++) {
    
    // Inner loop to compare the current element with the next elements
    for (let j = i + 1; j < arr.length; j++) {
      
      // If an inversion is found (arr[i] > arr[j]), increment count
      if (arr[i] > arr[j]) count++;
    }
  }
  
  // Output the total count of inversions
  console.log(count);
}

// Example usage:
countInversions([1, 3, 2, 4, 5,6,2]);  // Output: 5 */  


//   //


//37.Find Consecutive Largest Subsequence //
/* function largestConsecutiveSubsequence(arr){
  let maxSum = [0], currentSum = [0];
  
  for(let i=0; i < arr.length; i++){
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  console.log(maxSum);
}
largestConsecutiveSubsequence([1, -2, 3, 4, -1, 2, 1, -5, 4]); // Output: 9  */ 

//explain above code//
/* 1: currentSum = max(1, 0 + 1) = 1, maxSum = max(0, 1) = 1
-2: currentSum = max(-2, 1 - 2) = -1, maxSum = max(1, -1) = 1
3: currentSum = max(3, -1 + 3) = 3, maxSum = max(1, 3) = 3
4: currentSum = max(4, 3 + 4) = 7, maxSum = max(3, 7) = 7
-1: currentSum = max(-1, 7 - 1) = 6, maxSum = max(7, 6) = 7
2: currentSum = max(2, 6 + 2) = 8, maxSum = max(7, 8) = 8
1: currentSum = max(1, 8 + 1) = 9, maxSum = max(8, 9) = 9
-5: currentSum = max(-5, 9 - 5) = 4, maxSum = max(9, 4) = 9
4: currentSum = max(4, 4 + 4) = 8, maxSum = max(9, 8) = 9 */ ///

//    ///

//38.Sum of Digits of a Number //
/* function sumOfDigits(num) {
  console.log(num.toString().split('').reduce((sum, digit) => sum + +digit, 0));
}
sumOfDigits(1234); // Output: 10 */

//    //


//39.Power of a Number //
/* function pow(base,exponent){
  console.log(Math.pow(base,exponent));
}
pow(4,2);  //output 16 */

//   //


//40.Add Two Fractions //

//formula //

// A/B and C/D = A*D + C*D / B*D 

/* function addFractions(num1, den1, num2, den2) {
  const den = den1 * den2;
  const num = num1 * den2 + num2 * den1;
  console.log(`${num}/${den}`);
}
addFractions(1, 2, 1, 3); // Output: 5/6 */ 

//  //

//41.Find the Roots of a Quadratic Equation //
/* function quadraticRoots(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(discriminant);
  console.log([(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)]);
}
quadraticRoots(1, -3, 2); // Output: [2, 1] */

// 42.Find the Prime Factors of a Number //
/* function primeFactors(num) {
  const factors = [];
  for (let i = 2; i <= num; i++)
    while (num % i === 0) factors.push(i), num /= i;
  console.log(factors);
}
primeFactors(87); // Output: [3,29]; */

//  //


//43.Convert Digits to Words //
/* function digitsToWords(num) {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  console.log(num.toString().split('').map(digit => words[digit]).join(' '));
}
digitsToWords(23); // Output:  Two Three */

//    //

//44.Find the Factorial of a Number Using Recursion //
/* function factorial(num) {
  console.log(num <= 1 ? 1 : num * factorial(num - 1));
}
factorial(4); // Output: 24 */

//  //

//45.spiralTravdersal //
/* function spiralTraversal(matrix) {
  const result = [];
  while (matrix.length) {
    result.push(...matrix.shift());
    for (let row of matrix) result.push(row.pop());
    result.push(...(matrix.pop() || []).reverse());
    for (let row of (matrix.reverse() || [])) result.push(row.shift());
    matrix.reverse();
  }
  console.log(result);
}
spiralTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5] */

//  //


//46.Fibonacci Series Using Recursion //
/* function fibonacci(n) {
  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  console.log([...Array(n)].map((_, i) => fib(i)));
}
fibonacci(8); // Output: [0, 1, 1, 2, 3, 5, 8, 13] */ 

//   //



/////////////////   THE END ////////////////////













  
  
  
  
