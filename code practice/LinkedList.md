/////// LINKED LIST          ////


/* class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append: Insert a new node at the end of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Prepend: Insert a new node at the beginning of the linked list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete: Remove the first occurrence of a node with the given data
    delete(data) {
        if (!this.head) {
            return; // List is empty
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Search: Find the first occurrence of a node with the given data
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true; // Data found
            }
            current = current.next;
        }
        return false; // Data not found
    }

    // Print: Display the elements of the linked list
    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30
console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false */


/////



DELETE THE LAST NODE:

//                   //

class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

function deleteLad(head){
    if(!head){
        return null;
    }

    if(!head.next){
        return null;
    }

    let secondLast = head;

    while(secondLast.next.next){
        secondLast = secondLast.next;

    }

    secondLast.next = null;
    return head;
}

function printLoa(head){

    while(head){
        console.log(head.data + "->");
        head = head.next;
    }
    console.log("null");

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("THIS IS THE PRINTREEDD LIST:");
printLoa(head);

head = deleteLad(head);

console.log("THE LAST DELETE NODE IS:");
printLoa(head);
//                  //


DELETE THE FIRST NODE:

//               //
class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

function deleteLad(head){
    if(head === null)
        return null;

    head = head.next;

    return head;

}

function printLoa(head){

    while(head !== null){
        console.log(head.data + "->");
        head = head.next;
    }
    console.log("null");

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("THIS IS THE PRINTREEDD LIST:");
printLoa(head);

head = deleteLad(head);

console.log("THE LAST DELETE NODE IS:");
printLoa(head);


//               //



DELETE THE SPECIFIC NODE:

//                   //

class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

function deleteLad(head,position){
    

    let temp = head;
    let prev = null;

    if(temp === null){
        return head;
    }

    if(position === 1){
        position = temp.next;
        return head;
    }
for(let i=1; temp !== null && i<position; i++){
    prev = temp;
    temp = temp.next;

}

if(temp !== null){
    prev.next = temp.next;

}else{
    console.log("the value is not");
}
return head;

}

function printLoa(head){

    while(head !== null){
        console.log(head.data + "->");
        head = head.next;
    }
    console.log("null");

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("THIS IS THE PRINTREEDD LIST:");
printLoa(head);

let position = 3;
head = deleteLad(head,position);

console.log("THE LAST DELETE NODE IS:");
printLoa(head);
//                  //


GET INDEX:


///                 ///

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next  = next;
    }
}

function getIn(head,index){

    if(head === null){
        return -1;
    }

    if(index === 1){
        return head.data;
    }

    return getIn(head.next , index -1);

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log(getIn(head,3));


///                          ///

Program to find size of Doubly Linked List



///                              ///

// A complete working JavaScript program to
// find the size of a doubly linked list.

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

// This function returns the size
// of the linked list
function findSize(curr) {
    let size = 0;
    while (curr !== null) {
        size++;
        curr = curr.next;
    }
    return size;
}

// Create a hard-coded doubly linked list:
// 1 <-> 2 <-> 3 <-> 4
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

console.log(findSize(head));

///                              ///
