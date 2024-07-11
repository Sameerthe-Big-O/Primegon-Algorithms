//* a type link list where we put the constraint that we can only access the first and the last element follow the first in and first our aappraoch right

//*how to implement??

//*terminologies

/*
*enqueue
*deque
*peek

*enqueue??


*means we've to remove the add element of the queue  for that we need to do some operations
//*since i've already told that last element will be the one who comes in the last 

*[1,2,3,4]  we add 5 so now five become the last 

but we're implementing queue in link list so we've  some operations

first make the link between newly added node and previous

    this.tail.next = node; 

    now make added node as tail
    this.tail = node;

    *deque
    !save your head
    !udpate your head
    !return the value

        $programmatically code 
        //*first save the head in variable
        //*next update the heaed
        const h = this.head;
        this.head = this.head?.next;

        *did this because there are languages who doesn't have the grabage collector  so i'm explicitly removing
        h.next = undefined;

        !the reason queue are not good for the array because even if we add something at front and last then all the other have to shift which can cost us O(n);

        0.      1.    2.   3.
        
        sam     khi   pk   goo 

        now if i want to remove the first item
        0.      1.    2.   3.
        
                khi   pk   goo 

        now i'd have to shift all the items one by one to left or right depending on operation
        0.      1.    2.   (O)n
        
        khi   pk   goo 

        but if we use the queue then we can just remove the first item and last item and it will be O(1)        

        !but when it comes to Linked List queues are better options because insertion and deletion operations are O(1)


        head                  tail
        khi --- joi--- Sam----koop

        now if we want to remove just we have to do is terminate the connection and mark joi as head
        
        head             tail
        joi --- samer --- koop
        !so when we have to insert or delete something at first at first and last linked List is best 

        !!but when you have situation where you have first come takes first and last one last then we can use Queue + Linked List it cost O(n)

*/

//*here is the practical implementation of the queue
class Queue {
  constructor(value) {
    const node = {
      value: value,
      next: null,
    };
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
  enqueue(value) {
    const node = {
      value: value,
      next: null,
    };
    const previous = this.tail;
    previous.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  dequeue() {
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    return this;
  }
  peek() {
    return this.head;
  }
}

//*here's improved version that handles the edge cases
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 0;
  }
  enqueue(value) {
    if (this.length === 0) {
      const node = new Node(value);
      this.head = node;
      this.tail = this.head;
      this.length = 1;
      return this;
    }
    const node = new Node(value);
    const previous = this.tail;
    previous.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.head) {
      return "Queue has no elemtn";
    }

    //*we can change the check like the element we're about to dequeue is tail and head same
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    this.length--;
    return this;
  }
  peek() {
    return this.head;
  }
}

//*why array wouldn't cause the insertion at the O(n);

//another solution
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    //*    this.head = null;
    //*  this.tail = null;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
