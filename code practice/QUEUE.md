


////                QUEUE      ////


FIFO=>


1.Simple Queue (Linear Queue):
2.Circular Queue:
3.Priority Queue:
4.Deque (Double-Ended Queue):
5.Blocking Queue:
6.Double-Ended Priority Queue:


1.Simple Queue (Linear Queue):
/                      /
class SimpleQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        return this.items.join(" ");
    }
}

// Usage
const simpleQueue = new SimpleQueue();
simpleQueue.enqueue(1);
simpleQueue.enqueue(2);
console.log(simpleQueue.dequeue()); // Output: 1
console.log(simpleQueue.printQueue()); // Output: 2

/                     /
2.Circular Queue:
/                 /
class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(element) {
        if (this.isFull()) return "Queue is full";
        if (this.isEmpty()) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        const element = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    printQueue() {
        if (this.isEmpty()) return "Queue is empty";
        let result = [];
        for (let i = this.front; i !== this.rear; i = (i + 1) % this.size) {
            result.push(this.items[i]);
        }
        result.push(this.items[this.rear]);
        return result.join(" ");
    }
}

// Usage
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
console.log(circularQueue.enqueue(4)); // Output: "Queue is full"
console.log(circularQueue.dequeue()); // Output: 1
console.log(circularQueue.printQueue()); // Output: 2 3

/                  /
3.Priority Queue:  
/              /
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift().element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        return this.items.map(item => `${item.element} (Priority: ${item.priority})`).join(", ");
    }
}

// Usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 2);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("C", 3);
console.log(priorityQueue.dequeue()); // Output: "B"
console.log(priorityQueue.printQueue()); // Output: "A (Priority: 2), C (Priority: 3)"


/                /
4.Deque (Double-Ended Queue): 
/               / 
class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addRear(element) {
        this.items.push(element);
    }

    removeFront() {
        if (this.isEmpty()) return "Deque is empty";
        return this.items.shift();
    }

    removeRear() {
        if (this.isEmpty()) return "Deque is empty";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printDeque() {
        return this.items.join(" ");
    }
}

// Usage
const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log(deque.printDeque()); // Output: 0 1 2
console.log(deque.removeFront()); // Output: 0
console.log(deque.removeRear()); // Output: 2

/                /
5.Blocking Queue: 

/               /
class BlockingQueue {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
    }

    async enqueue(element) {
        while (this.items.length === this.capacity) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        return this.items.join(" ");
    }
}

// Usage
const blockingQueue = new BlockingQueue(2);
blockingQueue.enqueue(1);
blockingQueue.enqueue(2);
console.log(blockingQueue.enqueue(3)); // Will be blocked until space is available

/                /
6.Double-Ended Priority Queue:

/                           /

class DoubleEndedPriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeueFront() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift().element;
    }

    dequeueRear() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.pop().element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        return this.items.map(item => `${item.element} (Priority: ${item.priority})`).join(", ");
    }
}

// Usage
const doubleEndedPriorityQueue = new DoubleEndedPriorityQueue();
doubleEndedPriorityQueue.enqueue("A", 2);
doubleEndedPriorityQueue.enqueue("B", 1);
doubleEndedPriorityQueue.enqueue("C", 3);
console.log(doubleEndedPriorityQueue.dequeueFront()); // Output: "B"
console.log(doubleEndedPriorityQueue.dequeueRear()); // Output: "C"
console.log(doubleEndedPriorityQueue.printQueue()); // Output: "A (Priority: 2)"

/                         /