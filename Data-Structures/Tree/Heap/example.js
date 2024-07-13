/*
const a=[]

[10,20,15,20,40]

these are the element we've to add to make a max heap

first add an item

a.push(10)
        10 //already max heap
a[10,20]
a.push(20)
        10
     20  
but now we'll compare the values new value with parent

20 parent is 10 we'll use 

[i/2]=[2/2] = 0

10 less then 20 now swap
  
      20
   10
30

*/

let heap = [];

function insertInHeap(num) {
  if (heap.length === 0) {
    heap.push(num);
    return;
  }
  heap.push(num);
  let currentIndex = heap.length - 1;
  // Continue to heapify up until the heap property is restored or we reach the root
  while (currentIndex > 0) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    if (heap[parentIndex] < heap[currentIndex]) {
      let temp = heap[parentIndex];
      heap[parentIndex] = heap[currentIndex];
      heap[currentIndex] = temp;
      //*here we've updated the current index simply
      currentIndex = parentIndex;
    } else {
      return;
    }
  }
}

function deleteHeap() {
  if (heap.length === 0) {
    return null;
  }

  //*frist replace the root node with last tail or last value in an array
  heap[0] = heap[heap.length - 1];

  //*then remove that
  heap.pop();
  let currentIndex = 0;

  //*then compare the new value with it's children if codition doesn;t get satisfied then swap simpily and do it until either it statisfy the condition or until

  //*top to the bottom approach

  while (currentIndex < heap.length - 1) {
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let temp;

    if (heap[currentIndex] < heap[leftChildIndex]) {
      temp = heap[currentIndex];
      heap[currentIndex] = heap[leftChildIndex];
      heap[leftChildIndex] = temp;
      currentIndex = leftChildIndex;
    } else if (heap[currentIndex] < heap[rightChildIndex]) {
      temp = heap[currentIndex];
      heap[currentIndex] = heap[rightChildIndex];
      heap[rightChildIndex] = temp;
      currentIndex = rightChildIndex;
    } else {
      return;
    }
  }
}
