//*it's exactly the opposite of the queue the latest element becomes the head

//*often you see error the stack tracer ever wonder what that refers to basically that what was the latest function or most recent function when the error occured

//*it's just like the book of the stac as well where the last one will get the fist out and last one becomes the lastest

//*adding the new Element

//*we'd point the lastest element most recent element let's E is getting then we'd pointing the E to the  and then we'd update head to the E the reason we first point E to head is because we we actually want to create the link

//*removing

//*first we'd save the lastest head element

//*upate head to repoint back to the previous one
//*then you update your head to point to the previous or next to last  depending on how we wanna create  and then can return out E

//*E will no longer be pointing here we break it here from the greaph, we just do the opposite, inverse

//*whenever we call the function we basically put that on the stack also uses in the recursion

//*property access on the js may not the constant time remember that shit

class Stack {
  constructor(value) {
    const node = {
      value: value,
      next: null,
    };
    this.head = node;
    this.tail = this.head;
    let length = 1;
  }
  push(value) {
    const newNode = {
      value: value,
      next: null,
    };
    const previousHeader = this.head;
    this.head = newNode;
    this.head.next = previousHeader;
    this.length++;
    console.log(this.getStackTracer());
    return this;
  }
  pop() {
    const currentHead = this.head;
    this.head = this.head.next;
    currentHead.next = null;
    this.length--;
    console.log(this.getStackTracer());
    return this;
  }
  peek() {
    return this.head;
  }
  getStackTracer() {
    let counter = 0;
    const arrayOfFunctions = [];
    let currentNode = this.head;
    while (counter < this.length) {
      arrayOfFunctions.push(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
    return arrayOfFunctions;
  }
}
