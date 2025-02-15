JS CONCEPTES:
https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file

1. CORE JS CONCEPTS:
  
  1.1 A.closures
    A closure is created when a function is defined inside another function and accesses variables from its outer scope. Even after the outer function has finished executing, the inner function retains access to the variables from the outer function, forming a closure.
    
    code example:

       //  var outerFunction = function () {
    let variable1 = "Example of closure"

    var innerFunction = function () {
        console.log(variable1)


    }
    return innerFunction;
}

var newFunction = outerFunction()
newFunction() ///

B.lexical scope:
   Lexical scope means the scope of a variable is determined by its location in the source code. In JavaScript, functions remember the environment in which they were created, which includes access to variables in their outer scope. When you create a closure, the inner function has access to variables in the lexical environment, even after the outer function completes.
     
     code example:
         function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    }
}

const greetJohn = greet("John");
greetJohn("Hello"); // "Hello, John!"
greetJohn("Goodbye"); // "Goodbye, John!"


C.private variable:

   let score = 0;

function increment(points){
    score += points;
    console.log(`+ ${points}pts`);
    
}
function decrement(points){
    score -= points;
    console.log(`- ${points}pts`);
    
}
function getscore(){
    return score;
    
}

increment(5);
decrement(8);
console.log(`The final score is: ${getscore()}`);


1.2: Hoisting 

  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This allows you to use variables and functions before they are declared in the code.

  A.Variable Hoisting:

    console.log(a); // undefined (hoisted, but not initialized yet)
var a = 10;
console.log(a); // 10

   B.let and const Hoisting:

    console.log(b);// ReferenceError: Cannot access 'b' before initialization
let b = 20;

let b = 20;
console.log(b); //20
//let end //

// const//
   console.log(b);// ReferenceError: Cannot access 'b' before initialization
const b = 20;

const b = 20;
console.log(b); //20 

// const end //

  c.Function Hoisting:
    hoistedFunction(); // Works! Outputs: "Hello, World!"

function hoistedFunction() {
    console.log("Hello, World!");
}

//    //

//   //

1.3 "THIS" keywords:
   The this keyword in JavaScript refers to the context in which a function is executed. Its value depends on how and where the function is called.

  A.this in Global Scope ;
     
     console.log(this); // In the browser: `this` refers to the `window` object

function showGlobalContext() {
    console.log(this); // Still refers to `window`
}

showGlobalContext();
//   //

  B.Object method:
    
    const person = {
    name: 'Alice',
    greet: function() {
        console.log(this.name); // `this` refers to the `person` object
    }
};

person.greet(); // Output: 'Alice'
//   //


  C.this in Event Handlers:
    
     <button id="myButton">Click me</button>

<!-- <script>
    const button = document.getElementById('myButton');

    button.addEventListener('click', function() {
        console.log(this); // `this` refers to the button element
        this.style.backgroundColor = 'blue'; // Changes the button's color
    });
</script> -->
//  //

   D.Arrow Functions vs Traditional Functions and this:

    traditional function:

    const person = {
    name: 'Bob',
    greet: function() {
        console.log(this.name); // `this` refers to the `person` object
    }
};

person.greet(); // Output: 'Bob'
//    //

  Aroow function:
     
      const person = {
    name: 'Bob',
    greet: () => {
        console.log(this.name); // `this` does NOT refer to the `person` object
    }
};

person.greet(); // Output: undefined (or `window.name` in browsers)

//  //

//  using "this" call,apply and bind:
   
   const person1 = {
    name: 'Alice',
    greet: function(age, city) {
        console.log(`Hello, my name is ${this.name}, I am ${age} years old and I live in ${city}.`);
    }
};

const person2 = { name: 'Bob' };

// 1. Using `call`: Immediately invokes the function with `this` set to `person2`.
person1.greet.call(person2, 30, 'New York'); 
// Output: "Hello, my name is Bob, I am 30 years old and I live in New York."

// 2. Using `apply`: Immediately invokes the function with `this` set to `person2`, and arguments passed as an array.
person1.greet.apply(person2, [25, 'Los Angeles']);
// Output: "Hello, my name is Bob, I am 25 years old and I live in Los Angeles."

// 3. Using `bind`: Returns a new function with `this` permanently bound to `person2`, but doesn't invoke it immediately.
const bindGreet = person1.greet.bind(person2, 35, 'Chicago');
bindGreet(); // Output: "Hello, my name is Bob, I am 35 years old and I live in Chicago."


//     ///


1.4.Prototypes and Inheritance:

 JavaScript uses a prototype-based inheritance model, allowing objects to inherit properties and methods from other objects. This is achieved through the prototype chain, which facilitates object inheritance and enhances reusability.

Prototypes:

=>prototypes allow properties and methods to be shared among instances of the function or object

// Basic code//

function Car() {
    console.log("Car instance created!");
};

// add a property to prototype
Car.prototype.color = "Red";

// add a method to the prototype
Car.prototype.drive = function () {
    console.log(`Driving the car painted in ${this.color}...`);
};

// display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

// call the added method
Car.prototype.drive();

//The car's color is: Red
 //Driving the car painted in Red...
//           //

 A.Prototype Chain:

  JavaScript always searches for properties in the objects of the constructor function first. Then, it searches in the prototype.

// Basic code //

function Car() {
    this.color = "Red";
};

// add property that already exists
Car.prototype.color = "Blue";

// add a new property
Car.prototype.wheels = 4;

const c1 = new Car();

console.log(`The car's color is ${c1.color}.`); 
console.log(`The car has ${c1.wheels} wheels.`);
// //


   B.Object Inheritance Using Prototypes:


1.4 Prototypes and Inheritance in JavaScript
JavaScript uses a prototype-based inheritance model, allowing objects to inherit properties and methods from other objects. This is achieved through the prototype chain, which facilitates object inheritance and enhances reusability.

1. Prototype Chain
The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript object has a hidden internal property called [[Prototype]], which can be accessed using Object.getPrototypeOf(obj) or the __proto__ property.

When you attempt to access a property of an object, JavaScript first looks at the object itself. If the property is not found, it then looks up the prototype chain.

Example:
javascript
Copy code
const animal = {
    eats: true
};

const rabbit = Object.create(animal);
rabbit.hops = true;

console.log(rabbit.eats); // Output: true (inherited from `animal`)
console.log(rabbit.hops); // Output: true (own property)
console.log(rabbit.__proto__ === animal); // Output: true (prototype link)
Explanation:

The rabbit object is created with animal as its prototype. It can access properties of animal through the prototype chain.
B. Object Inheritance Using Prototypes:

You can create a chain of objects and enable inheritance using prototypes. This allows one object to inherit from another.

  function Car(model, year) {
    this.model = model;
    this.year = year;
};

// create multiple objects
let c1 = new Car("Mustang", 1964);
let c2 = new Car("Corolla", 1966);

// add property
Car.prototype.color = "Red";

// add method
Car.prototype.drive = function() {
    console.log(`Driving ${this.model}`);
};

// display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);  
console.log(`${c2.model} color: ${c2.color}`);  

// display added method using c1 and c2 objects
c1.drive();
c2.drive();
 
 //   //

 C. ES6 Class Inheritance:

 With ES6, JavaScript introduced class syntax, which provides a clearer and more concise way to create objects and handle inheritance. It essentially abstracts the prototype chain mechanism.

   class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: "Buddy barks."
//   //





 ///  End  ///



 // Start //


 2.Array Methods (Functional Programming)
   
   JavaScript provides several powerful array methods that support functional programming principles. These methods help in transforming, filtering, and reducing arrays using callback functions.

- map() - Transforming arrays, Using callback functions:
  
   The map() method creates a new array by applying a callback function to each element of the array. It does not modify the original array.

   // code //

   const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newName =names.map(function(name, index, array) {
  return name + "DEV";
});
console.log(newName); // Output: ['RohitDEV', 'AakashDEV', 'VinayDEV', 'AshishDEV', 'VasuDEV']

console.log(names); // Output: ['Rohit', 'Aakash', 'Vinay', 'Ashish', 'Vasu']

//    //



- filter() - Filtering arrays based on condition:

    The filter() method creates a new array containing only the elements that pass a condition specified in the callback function. It does not change the original array.

   //   const newArray = array.filter(callback(currentValue, index, array)); // 

    // code //
      const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//    //


     
- reduce() - Accumulating values, Reducing arrays to a single value (e.g., sum, product):

  The reduce() method applies a callback function to each element in the array (from left to right) to reduce the array to a single value, such as a sum or product.

  // const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue); // 

  // code //
    
    const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // Output: 24
 //   //




- find() - Finding the first matching element:

    The find() method returns the first element in the array that satisfies the provided condition. If no element matches, it returns undefined.

    // code //
     
     const numbers = [1,2,3,4,5,6];

const gind = numbers.find(num => num % 2 == 0);
console.log(gind); // it show the first elemnet of the array.

- forEach() - Iterating over arrays without returning values:

    The forEach() method executes a provided function once for each array element. Unlike map(), forEach() does not return a new array or any value.

    //code //

const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];

const newName=names.forEach(function(name, index, array) {
  array[index] = name + "DEV";
});
console.log(newName) // Undefined

console.log(names); // Output: ['RohitDEV', 'AakashDEV', 'VinayDEV', 'AshishDEV', 'VasuDEV']

//    //

      
- some() & every() - Checking conditions in arrays (any or all)

   -some():
     
      1.The some() method executes the callback function once for each array element.

      2.The some() method returns true (and stops) if the function returns true for one of the array elements.

      3.The some() method returns false if the function returns false for all of the array elements.

      4.The some() method does not execute the function for empty array elements.

      5.he some() method does not change the original array.

      //  code //

      const numbers = [1, 3, 5, 7];
      const hasEven = numbers.some(num => num % 2 === 0);
      console.log(hasEven); // Output: false

      //   //
    -every():

      1.The every() method returns true if the function returns true for all elements.

      2.The every() method returns false if the function returns false for one element.

      3.The every() method does not execute the function for empty elements.

      4.The every() method does not change the original array.

      // code //


      
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true 

//    //

3. Event Handling & DOM Manipulation:
//    ///

//   ///

4. promise & async&await:

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.


// Basic code //

/* // Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // You can change this to false to simulate a failure

    setTimeout(() => {
        if (success) {
            resolve('Task completed successfully!');
        } else {
            reject('Task failed.');
        }
    }, 2000); // Simulates a 2-second delay
});

// Consuming the Promise
myPromise
    .then((message) => {
        console.log(`${message} \n Good to go..!`); // Will run if the promise is resolved
    })
    .catch((error) => {
        console.log(` ${error} \n No its not working properly...!`); // Will run if the promise is rejected
    });
 */

 //     ///


 /// promise chaining ///


 // Simulating an asynchronous task using Promises
const task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Data from Task 1");
        }, 1000); // Simulating a 1-second delay
    });
};

const task2 = (dataFromTask1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 2 completed using:", dataFromTask1);
            resolve("Data from Task 2");
        }, 1000); // Simulating a 1-second delay
    });
};

const task3 = (dataFromTask2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task 3 completed using:", dataFromTask2);
            resolve("All tasks completed");
        }, 1000); // Simulating a 1-second delay
    });
};

// Executing the tasks with promise chaining
task1()
    .then((result1) => {
        return task2(result1);  // Pass the result of task1 to task2
    })
    .then((result2) => {
        return task3(result2);  // Pass the result of task2 to task3
    })
    .then((finalResult) => {
        console.log(finalResult);  // Logs the final result
    })
    .catch((error) => {
        console.log("Error:", error);  // Handle any errors in the chain
    });



//   //


4.1.async/await:


async/await provides a cleaner and more readable way to work with promises. The await keyword can be used inside functions marked with async to wait for the completion of an asynchronous operation.


// basic code //


// Simulating an asynchronous task (e.g., fetching data)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched Data";
            resolve(data);  // Resolve the promise with data after 2 seconds
        }, 2000);
    });
}

// Using async/await to handle the asynchronous task
async function getData() {
    try {
        console.log("Fetching data...");
        const result = await fetchData();  // Wait for the promise to resolve
        console.log("Data received:", result);
    } catch (error) {
        console.error("Error fetching data:", error);  // Handle any errors
    }
}

// Calling the async function
getData(); 


//    //



API FETCH USING async and await:


 /* async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

getPosts();
   // Success API result..


async function getPosts() {
    try {
        const response = await fetch ('https://97mm2.sse.codesandbox.io/teachers/');
        const posts = await response.json();
        console.log(posts);
        
    }
    catch(error) {
        console.error('Error is occuring in this API...!');
    }
}
getPosts();   // Error fetching api */



5. ES6+ (Modern JavaScript Features)

5.1 Arrow Functions:

  Arrow functions, introduced in ES6, are a more concise way to write functions in JavaScript. The syntax is simpler compared to traditional function expressions. They are particularly useful for situations where you need to write small, short functions, and are designed to handle this binding more predictably.


 1. Arrow Functions have a more concise syntax than traditional functions. They don't bind their own this but inherit it from the surrounding context.

2.Traditional Functions bind this to the object calling the function, or to the global object in non-strict mode.


  // bassic code //


  const numbers = [1,2,3,4,5,6];
          const ting = numbers.map(num => num *2);
          console.log(ting);

//   ///

          const car = {
    brand: 'Toyota',
    getBrand() {
        console.log(this.brand); // `this` refers to the car object
    }
};
car.getBrand(); // Output: Toyota


          //  //


          Implpict return:
            
            Implicit Return: If the arrow function has only one expression, you can omit the braces and the return keyword.
//   ///
            const add = (a, b) => a + b;  // Implicit return
console.log(add(2, 3));  // Output: 5

///   ///

6.2 Destructuring:

Destructuring is a convenient way of extracting values from arrays or properties from objects into distinct variables. Introduced in ES6, it makes code cleaner and more concise by allowing you to "unpack" values into variables directly, instead of accessing them through the array or object repeatedly.

1. Array Destructuring:

Array destructuring allows you to extract values from an array and assign them to variables based on their position.

//Basic code //

 const fruites = ['apple','mango','kovaa'];
        const [first,...rest] = fruites;
        console.log(first);
        console.log(rest);
//        //


2. Object Destructuring
Object destructuring allows you to extract properties from an object and assign them to variables with the same name as the property.


//Basic code //
const details = {name:'Deva',age:25,address:'sandal street-21'};
       const {name,age,address} = details;
       console.log(details);

       //    //

3. Nested Destructuring

When working with more complex data structures, such as nested objects or arrays, destructuring allows you to unpack them easily.       

// Basic code //


const user = {
    name: 'Alice',
    address: {
        city: 'New York',
        zip: 10001
    }
};

const { name, address: { city, zip } } = user;

console.log(name);  // Output: 'Alice'
console.log(city);  // Output: 'New York'
console.log(zip);   // Output: 10001


//   //


6.3 Spread and Rest Operators:


6.3.1.spread oprators:


  The spread operator allows you to "spread" the elements of an array or object into another array or object. It’s useful when you need to copy or combine arrays and objects or pass arguments into functions.

  // using array //
  const  arr1 = [ 1,2,3,4,5];
      const arr2 = [6,7,8,9];
      const both = [...arr1,...arr2];
      console.log(both);  // output [1, 2, 3, 4, 5, 6, 7, 8, 9]

      ///    ///

  // using function //

  function add(a,b,c){
        return a+b+c;

      }
      const num = [1,2,4];
      console.log(add(...num));


      //   ///

    // using object //

     const obj1 = {a:1,b:4};
     const obj2 = {c:5,d:7};

     const both = {...obj1,...obj2};
     console.log(both);

     //   //


   2. Rest Operator (...)

The rest operator is used to collect all remaining elements into an array or object. It’s useful when working with function parameters, or when you want to group remaining items into a single variable.     


//  rest using array //

 const [first, second, ...rest] = [1, 2, 3, 4, 5];

            console.log(first);  // Output: 1
            console.log(second); // Output: 2
            console.log(rest);   // Output: [3, 4, 5]
            //   ///

// rest using obj //

const person = { name: 'Alice', age: 25, city: 'New York', country: 'USA' };
const { name, ...rest } = person;

console.log(name);  // Output: 'Alice'
console.log(rest);  // Output: { age: 25, city: 'New York', country: 'USA' }

//    //


6.4 Template Literals (ES6+):

Template literals are a feature introduced in ES6 that provide a cleaner, more flexible way to work with strings. Unlike traditional strings (which use single '' or double quotes ""), template literals use backticks `, which allows for powerful features like string interpolation, multi-line strings, and tagged templates.

1. String Interpolation:

String interpolation allows you to embed variables and expressions directly into strings using ${} syntax inside template literals.

// Basic code //
        const name = 'Deva';
           const age = 23;
           const role = 'frontend developer';

           const combining = `Name is ${name},and his age is ${age},He is working here to  ${role} role.`;
           console.log(combining);
           //   //


  
6.4 Template Literals (ES6+)
Template literals are a feature introduced in ES6 that provide a cleaner, more flexible way to work with strings. Unlike traditional strings (which use single '' or double quotes ""), template literals use backticks `, which allows for powerful features like string interpolation, multi-line strings, and tagged templates.

1. String Interpolation
String interpolation allows you to embed variables and expressions directly into strings using ${} syntax inside template literals.

Example: String Interpolation

js
Copy code
const name = 'Alice';
const age = 25;
const city = 'New York';

// Using template literals for interpolation
const message = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

console.log(message); 
// Output: "My name is Alice, I am 25 years old, and I live in New York."
In this example, the variables name, age, and city are embedded directly into the string using ${}. This makes the code cleaner and more readable compared to traditional concatenation with +.

2. Multi-line Strings:

Before ES6, handling multi-line strings was cumbersome and required either multiple concatenations or the use of escape characters like \n. Template literals solve this by allowing natural multi-line strings using backticks.


// basic code //

 const detailded = `my name deva ,
   i'm 22 year old ,
   i'm working in it company,
   my monthly salary is around 90,000`;
   console.log(detailded);

   //  //

3. Tagged Template Literals:

Tagged template literals are an advanced feature where you can use a tag function to process template literals before they are output. It allows for custom transformations, sanitization, or even template engines.   

// Basic code //

function highlight(strings, ...values) {
    // Combine strings and values with some custom formatting
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `**${values[i]}**` : '');
    }, '');
}

// Using the tag function with a template literal
const name = 'Alice';
const age = 25;

const message = highlight`My name is ${name} and I am ${age} years old.`;

console.log(message);
// Output: "My name is **Alice** and I am **25** years old."
//      //


7.Higher order function:


A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// Basic code //


function ring() {
        console.log('THis an argument ');  //this an argument
        
    };

    function higherOrder(func){
        console.log('This is an higher order function');
        func()

    }
    higherOrder(ring);  

    //This is an higher order function
// THis an argument 


//In higher order functions using map(),filter(),reduce()           //


7.2.Currying:

Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.


// Basic code //

function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); // 6

// currying code //

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6

//  Example code //

const buildSandWidge = (incridable1) => {
    return (incridable2) => {
        return (incridable3) => {
       return (incridable4) => {
        return `${incridable1},${incridable2},${incridable3},${incridable4}`;
       }

        }
    }
   }

   const myFood = buildSandWidge("Bunn")("frunchfrice")("burger")("Bunn");
   console.log(myFood);

   //                //



7.3.Debouncing:

Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time.
// Basic code //

 <input type="text" id="searchInput" placeholder="Start typing...">

   function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);  // Clear the previous timeout
            timeoutId = setTimeout(() => {
                func.apply(this, args);  // Call the function after the delay
            }, delay);
        };
    }
    
    // Usage: Example with an input field
    const processChange = debounce(() => {
        console.log('Input processed after 300ms delay');
    }, 300);
    
    // Simulating user input by calling the function
    document.getElementById('searchInput').addEventListener('input', processChange);
//     ///


7.4. Throttling:

Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.



// Basic code   //


<div style="height: 2000px;">
        Scroll down to see the throttled event in action.
    </div>

 function throttle(func, limit) {
        let inThrottle; // Flag to check if the function is throttled
        return function(...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);  // Call the function immediately
                inThrottle = true;          // Set the throttle flag
                setTimeout(() => inThrottle = false, limit);  // Reset throttle after the limit time
            }
        };
    }
    
    // Usage: Example with a window scroll event
    const handleScroll = throttle(() => {
        console.log('Scroll event handled!');
    }, 1000);  // Function will be called at most once every 1000ms
    
    // Adding the throttled function to the scroll event listener
    window.addEventListener('scroll', handleScroll);

  //             //

  8. Error Handling and Its Role in JavaScript:

Error handling is very important in a flexible and widely used language like JavaScript. Errors directly affect the user experience because they can create a negative perception about the reliability and quality of the application. Therefore, correct error management increases application reliability and ensures that users have a smooth experience.  

  8.1.Try-Catch Blocks: Error Handling:

  // Basic code //


   try{
let x = y+10;
  }catch(error){
    console.log("Error Message:",error.message);
    
  } // Error Message: y is not defined

  //    ///

8.2.Throw Blocks:

    function validEmail (email){
if(!email.includes('@')){
    throw new Error("Invalid email address: '@' character not found!");

}
return "vaild email address";

   }
    try {
        console.log(validEmail("johnwick@gmail.com"));
        

    } catch(error){
console.log("Error caught:",error.message);
    }
    
//         //

8.3.Custom error:


class ValidationError extends Error {
        constructor(message) {
            super(message);  // Call the parent Error constructor
            this.name = 'ValidationError';  // Custom error name
            this.date = new Date();  // Optional: Add custom properties
        }
    }
    
    function validateAge(age) {
        if (age < 18) {
            throw new ValidationError('Age must be 18 or older.');
        }
        return true ;
    }
    
    try {
        validateAge(12);  // This will throw an error
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`${error.name}: ${error.message}`);  // Custom error name and message
            console.log('Occurred on:', error.date);  // Custom property
        } else {
            console.log('An unexpected error occurred');
        }
    }

    //    // 

    9.Modules:

    ES6 modules are a way to structure and organize JavaScript code into reusable pieces. They allow for the export of functionality from one file and the import of it in another file.

Key Concepts:
Default Exports

A module can have one default export.
When importing a default export, the name of the import can be anything.
Named Exports

A module can have multiple named exports.
When importing named exports, you need to use the same names inside curly braces.
1. Default Exports
Default exports are useful when you want to export a single value, class, or function from a module.

Exporting:

js
Copy code
// file: message.js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return `${name} is ${age} years old.`;
};

export default message; // This is the default export
Importing the default export:

js
Copy code
// file: main.js
import message from './message.js'; // You can use any name for the import

console.log(message()); // Jesse is 40 years old.
2. Named Exports
Named exports are used when you want to export multiple things from a file.

Exporting multiple things:

js
Copy code
// file: utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
Importing named exports:

js
Copy code
// file: main.js
import { add, subtract } from './utils.js'; // Must use the correct names

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2
You can also combine named exports with a default export in the same module.

3. Renaming Imports/Exports
Named exports can be renamed during import using the as keyword.

Renaming during import:

js
Copy code
// file: main.js
import { add as addition, subtract as subtraction } from './utils.js';

console.log(addition(5, 3));  // 8
console.log(subtraction(5, 3)); // 2
4. Import All (*)
If a file has multiple exports, you can import everything using *.

js
Copy code
// file: main.js
import * as utils from './utils.js';

console.log(utils.add(5, 3));      // 8
console.log(utils.subtract(5, 3)); // 2
5. Combining Default and Named Exports
You can have both default and named exports in the same file.

js
Copy code
// file: mathUtils.js
export default function multiply(a, b) {
  return a * b;
}

export const add = (a, b) => a + b;
Importing both default and named exports:

js
Copy code
// file: main.js
import multiply, { add } from './mathUtils.js';

console.log(multiply(5, 3)); // 15
console.log(add(5, 3));      // 8
Why Use Modules?
Code Reusability: Break down large codebases into smaller, maintainable files.
Maintainability: Modular code is easier to debug and update.
Scope Isolation: Variables and functions defined in a module are not available globally, preventing naming collisions.
Summary
Default Exports: Can export one thing (function, variable, class) from a module.
Named Exports: Can export multiple values, and they must be imported with the same name (unless renamed).
Modules promote better code structure and improve code maintainability in JavaScript.


//  example code //

import createAccount from './account.js';         // Importing default export
import { isEmailValid, isUsernameValid } from './validation.js'; // Named imports
import { processPayment } from './payment.js';    // Named import
import calculateUserRating from './rating.js';    // Importing default export

// Creating a new account
const newAccount = createAccount('JohnDoe', 'john@example.com');
console.log('Account Created:', newAccount);

// Validating the account details
if (isEmailValid(newAccount.email) && isUsernameValid(newAccount.username)) {
    console.log('Account information is valid.');
} else {
    console.log('Invalid account information.');
}

// Processing a payment
const paymentStatus = processPayment(100);
console.log(paymentStatus);

// Calculating user rating
const userReviews = [
    { rating: 5 },
    { rating: 4 },
    { rating: 3 },
    { rating: 5 },
    { rating: 4 },
];
const userRating = calculateUserRating(userReviews);
console.log('User Rating:', userRating);
//                //



9.OOPS:


9.1.Classes and Objects


class contains variables and methodes (or) class containes variables and functions.

class is just an definition,weare access the class using objects.

object is instant of of classes , we are creating multiple intant in the classes.

// example code//

usind class and objects:

let print = function() {
    this.firstName = 'deva';  // this is variable 


    this.printName = function(){    // this is function
        return `My Name is - ${this.firstName}`;

    }
}

const test = new print (); // this an class

console.log(test.firstName) //deva
console.log(test.printName()) //


//                 //

using multiple intantes:
//          //
let print = function(name) {
    this.firstName = name;  // this is variable 


    this.printName = function(){    // this is function
        return `My Name is - ${this.firstName}`;

    }
}

const test = new print (); // this an class

console.log('deva');
console.log('deva');
console.log('deva');
console.log('deva');
//          //
 
9.2.Constructors


Here’s an explanation of each topic in JavaScript OOP, along with the relevant code snippet for each topic.

1. Classes and Objects
What: Classes are blueprints for creating objects, and objects are instances of these classes.

Why: They help in organizing code by grouping related properties and methods together, making it reusable and easier to maintain.

Code:
javascript
Copy code
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to display full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating an object (instance) of the Employee class
const emp1 = new Employee('John', 'Doe');
console.log(emp1.getFullName()); // Output: John Doe
//                                    //

2. Constructors

What: A constructor is a special method used for creating and initializing objects within a class.

Why: It allows for setting initial values when an object is created.

// Basic code //
class employees {
  
    constructor(name,id,branch){
        this.name = name;
        this.id = id;
        this.branch = branch;


    }
finallDeatails() {
    return (
        'THE EMPLOYEE NAME IS - ' + this.name + '\n' +
        'THE EMPLOYEE ID IS - ' + this.id + '\n' +
        'THE EMPLOYEE BRANCH NAME IS - ' + this.branch
    );


}
}
const test = new employees('Ravi', 2021, 'Tambaram');
console.log(test.finallDeatails());


//              //

9.3.Encapsulation

Encapsulation is a fundamental concept in object-oriented programming (OOP) that refers to the bundling of data (properties) and methods (functions) that operate on that data within a single unit, typically a class. It helps in organizing code, protecting the internal state of objects, and restricting direct access to certain components.

// Basic code //

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this._salary = 3000; // Private-like property (using _)
    }

    // Getter for accessing salary
    get salary() {
        return this._salary;
    }

    // Setter for controlling access to salary modification
    set salary(amount) {
        if (amount > 0) {
            this._salary = amount;
        }
    }
}

const emp1 = new Employee('John', 'Doe');
console.log(emp1.salary); // Output: 3000
emp1.salary = 4000;
console.log(emp1.salary); // Output: 4000

//            //
9.4.Inheritance:

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class (the child or subclass) to inherit properties and methods from another class (the parent or superclass). This promotes code reuse and establishes a hierarchical relationship between classes.

// Basic code //
// Parent class (Super Class)
class Employee {
    constructor(name, id, branch) {
        this.name = name;
        this.id = id;
        this.branch = branch;
    }

    getDetails() {
        return `Employee Name: ${this.name}, ID: ${this.id}, Branch: ${this.branch}`;
    }
}

// Child class (Sub Class) inheriting from Employee
class Manager extends Employee {
    constructor(name, id, branch, department) {
        super(name, id, branch); // Call the parent class constructor
        this.department = department; // Additional property for Manager
    }

    // Method overriding
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`; // Call parent method
    }
}

// Creating instances of Employee and Manager
const emp1 = new Employee('Ravi', 2021, 'Tambaram');
const manager1 = new Manager('Arun', 2022, 'Chennai', 'Sales');

// Accessing details of Employee
console.log(emp1.getDetails()); // Employee Name: Ravi, ID: 2021, Branch: Tambaram

// Accessing details of Manager
console.log(manager1.getDetails()); // Employee Name: Arun, ID: 2022, Branch: Chennai, Department: Sales

//            //
9.5.Polymorphism:

Polymorphism is a key concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types). 


// Basic code //

// Parent class (Super Class)
class Animal {
    sound() {
        return "Some generic animal sound"; // Generic sound
    }
}

// Child class (Sub Class) - Dog
class Dog extends Animal {
    sound() {
        return "Bark"; // Specific sound for Dog
    }
}

// Child class (Sub Class) - Cat
class Cat extends Animal {
    sound() {
        return "Meow"; // Specific sound for Cat
    }
}

// Function to demonstrate run-time polymorphism
function makeSound(animal) {
    console.log(`Sound: ${animal.sound()}`); // Calls the overridden method
}

// Creating instances of Dog and Cat
const dog = new Dog();
const cat = new Cat();

// Demonstrating run-time polymorphism
makeSound(dog); // Output: Sound: Bark
makeSound(cat); // Output: Sound: Meow

//                   //


9.6.Abstraction:

Abstraction is one of the fundamental principles of object-oriented programming (OOP). It refers to the concept of hiding the complex implementation details of a system and exposing only the necessary and relevant parts to the user. This allows users to interact with an object without needing to understand the underlying complexity.


// BAsic code //
// Abstract class (conceptual)
class Animal {
    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    // Abstract method
    sound() {
        throw new Error("Abstract method 'sound()' must be implemented.");
    }

    // Concrete method
    describe() {
        return `${this.name} makes a sound: ${this.sound()}`;
    }
}

// Concrete class - Dog
class Dog extends Animal {
    sound() {
        return "Bark"; // Implementing the abstract method
    }
}

// Concrete class - Cat
class Cat extends Animal {
    sound() {
        return "Meow"; // Implementing the abstract method
    }
}

// Creating instances
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(dog.describe()); // Output: Buddy makes a sound: Bark
console.log(cat.describe()); // Output: Whiskers makes a sound: Meow


//           //










