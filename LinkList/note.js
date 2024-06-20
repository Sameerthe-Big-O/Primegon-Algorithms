//*Ahh here we go one of my fav data structure i hope all of you guys are enjoying this
//*this section is pretty long since link list require alot of code

//*node as the type of container that will wrap the data

//*memeory usage is bit more optimized  but there's different run time cost

//*for the array the memrory is already being retrived for the usgae in most languages

//*we couldd create the object pool to hold on the nodes before using as well and optimzed speed of the list but in LinkList we alwayse use the less memory

//*to get item we've to traverse the list it's like   no binary search on Link

//*you can't go the backward in singly LinkList

//*if you don't have reference what's behind you lose it forever

//*it uses the heap allocated objects and puts them

//*let's say we want to insert the F at B now what could happen ???

//*F needs to points to the A

//*in the link list when we add something let's that now at 2 index what will it do is like just shift some pointer and that's it but still it can cost us the O(n) because of we've to traverse the list and first find element also finding an element would cost as like O(n)

//*prepent:1
//*append:1
//*lookup:O(n)
//*Insert:O(n)
//*delete:O(n)
//*arrays also better at reading because of caching since sequential memeory are placed next to each other but link list are scatter around the memeory so that's why

//here is the example to append and prepend the item in the list

class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    let node = {
      value: value,
      next: this.head,
    };
    this.head = node;
    this.length++;
    return this.getList();
  }
  append(value) {

    let node = {
      value: value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.getList();
  }
  insert(value, idx) {
    if (idx >= this.length) {
      //*chec for append
      return this.append(value);
    }
    if (idx === 0) {
      //*check for prepend
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    let currenNode = this.head;
    let previousNode = null;

    //*reason we can't use here the idx as terminate condition because either we have to use <= otherwise it won't get until we want
    for (let index = 0; index < this.length; index++) {
      if (idx === index) {
        newNode.next = currenNode;
        previousNode.next = newNode;
        this.length++;
        return this.getList();
      }
      previousNode = currenNode;
      currenNode = currenNode.next;
    }
  }
  inserWithOtherMethod(index, value){
      if (index >= this.length) {
      //*chec for append
      return this.append(value);
    }
    if (index === 0) {
      //*check for prepend
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    //*this method seems to be easy but requires more boilercode as in this method we don't have to use the two pointer approach
    const previusOne=this.traversetoIndex(index-1);
    const pointerHolder=previusOne.next;
    newNode.next = pointerHolder
    this.length++;
    return this.getList();
  }
  traversetoIndex(index){
    let counter=0;
    let currenNode = this.head;
    while(counter !== index){
      currenNode= currenNode.next;
      counter++;
    }
    return currenNode;
  }
  delete(idx) {
    let currenNode = this.head;
    let previousNode = null;
    for (let index = 0; index < this.length; index++) {
      if (idx === index) {
        previousNode.next = currenNode.next;
        currenNode.next = null;
        this.length--;
        return this.getList();
      }
      previousNode = currenNode;
      currenNode = currenNode.next;
    }
  }
  getList() {
    const values = [];
    let initiazler = 0;
    let currenNode = this.head;
    while (initiazler < this.length) {
      console.log(currenNode);
      values.push(currenNode.value);
      currenNode = currenNode.next;
      initiazler++;
    }
    return values;
  }
  traverse() {
    let initiazler = 0;
    let currenNode = this.head;
    while (initiazler < this.length) {
      console.log(currenNode.value);
      currenNode = currenNode.next;
      initiazler++;
    }
  }
};

//*another simple approach for inserting and deleting is that we get the previous node after the actuall index want to remove or add

//*hints:when deleting we connect the node that's previously to the node we about to remove to the node that's next to the node we're about to remove minds hurts?

//here's the diagram

//*imagine that we want to remove middle want now first we'll assign the next of previous to the address of next of middle node

//i know it's hard to imagine that's why i made this diagram

//*previous.next=currenNode.next; we're made the connection
//*now remove the middle node current.next=null
34;
// 23232---->
//           232
//           adaa----->
//                    1
//                    aada

class DoublyLinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      pre: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    let node = {
      value: value,
      next: this.head,
      pre: null,
    };
    this.head.pre = node;
    this.head = node;
    this.length++;
    return this.getList();
  }
  append(value) {
    let node = {
      value: value,
      next: null,
      pre: this.tail,
    };

    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.getList();
  }
  insert(value, idx) {
    if (idx >= this.length) {
      //*chec for append
      return this.append(value);
    }
    if (idx === 0) {
      //*check for prepend
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
      next: null,
    };
    let currenNode = this.head;
    let previousNode = null;

    //*reason we can't use here the idx as terminate condition because either we have to use <= otherwise it won't get until we want
    for (let index = 0; index < this.length; index++) {
      if (idx === index) {
        newNode.next = currenNode;
        previousNode.next = newNode;
        this.length++;
        return this.getList();
      }
      previousNode = currenNode;
      currenNode = currenNode.next;
    }
  }
  inserWithOtherMethod(index, value) {
    if (index >= this.length) {
      //*chec for append
      return this.append(value);
    }
    if (index === 0) {
      //*check for prepend
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
      next: null,
    };

    //*this method seems to be easy but requires more boilercode as in this method we don't have to use the two pointer approach
    const previusOne = this.traversetoIndex(index - 1);
    const nextHolder = previusOne.next;

    previusOne.next = newNode;
    newNode.pre = previusOne;
    newNode.next = nextHolder;
    nextHolder.pre = newNode;

    this.length++;
    return this.getList();
  }
  traversetoIndex(index) {
    let counter = 0;
    let currenNode = this.head;
    while (counter !== index) {
      currenNode = currenNode.next;
      counter++;
    }
    return currenNode;
  }
  delete(idx) {
    let currenNode = this.head;
    let previousNode = null;
    for (let index = 0; index < this.length; index++) {
      if (idx === index) {
        //*basically getting the next and previous reference of the index we want to remove
        const nextHolderRemoveItem = currenNode.next;
        const previousHolderRemoveItem = currenNode.previousHolder;
        previousNode.next = currenNode.next;
        nextHolderRemoveItem.pre = previousHolderRemoveItem;

        currenNode.next = null;
        currenNode.pre = null;
        this.length--;
        return this.getList();
      }
      previousNode = currenNode;
      currenNode = currenNode.next;
    }
  }
  getList() {
    const values = [];
    let initiazler = 0;
    let currenNode = this.head;
    while (initiazler < this.length) {
      console.log(currenNode);
      values.push(currenNode.value);
      currenNode = currenNode.next;
      initiazler++;
    }
    return values;
  }
  reverse() {
    let currenNode = this.tail;
    let counter = this.length;
    const nodeArray = [];
    while (counter > 0) {
      console.log(currenNode.value);
      nodeArray.push(currenNode.value);
      currenNode = currenNode.pre;
      counter--;
    }
    return nodeArray;
  }
  traverse() {
    let initiazler = 0;
    let currenNode = this.head;
    while (initiazler < this.length) {
      console.log(currenNode.value);
      currenNode = currenNode.next;
      initiazler++;
    }
  }
}
