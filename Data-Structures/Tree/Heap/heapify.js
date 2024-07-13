let heap = [];

// Function to insert elements into the heap
function heapify(num) {
  if (heap.length === 0) {
    heap.push(num);
    return;
  }
  heap.push(num);
  let currentIndex = heap.length - 1;

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
// Function to delete the root and restore the heap property
function deleteRoot(size) {
  if (heap.length === 0) {
    return;
  }

  // Swap the root with the last element in the current heap
  let temp = heap[0];
  heap[0] = heap[size - 1];
  heap[size - 1] = temp;

  let currentIndex = 0;

  while (currentIndex < heap.length) {
    {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      //*the main idea of the leftChildIndex < size - 1 this check is let's imaine that we've got sorted until 30    now we don't want to start from the 30 right so give one index less means that let's say i've changed 10 with 20 like [15, 10, 20, 30, 40] now when we call heapify to main the max heap then 10 will compare it self with 15 first and yeah it's smaller so swap then 15 will again get compare with 20 yeah swap but this will voilates the rule the point is here we don't want to compare with the elemnent we just pop which's the size-1 we just swap means that our check should be less then that
      if (
        leftChildIndex < size - 1 &&
        heap[currentIndex] < heap[leftChildIndex]
      ) {
        // Swap the current node with the largest child
        temp = heap[currentIndex];
        heap[currentIndex] = heap[leftChildIndex];
        heap[leftChildIndex] = temp;

        // Move down to the largest child
        currentIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size - 1 &&
        heap[currentIndex] < heap[rightChildIndex]
      ) {
        // Swap the current node with the largest child
        temp = heap[currentIndex];
        heap[currentIndex] = heap[rightChildIndex];
        heap[rightChildIndex] = temp;

        // Move down to the largest child
        currentIndex = rightChildIndex;
      }

      //*basically if neither the left or right is greater we just simply

      break;
    }
  }
}

// Example usage
let array = [40, 30, 15, 10, 20];

// Insert elements into the heap
for (let i = 0; i < array.length; i++) {
  heapify(array[i]);
}

console.log("Initial Max Heap:", heap);

// Manually delete elements from the heap and sort the array
//*rememeber we've to dynamically give last index so that it doesn't always pick the last one

//!we have to use the loop to delete be able to do the heap sort becaus each timee we've give one less index as the length
for (let i = heap.length - 1; i > 0; i--) {
  deleteRoot(i + 1);
  console.log(`Heap after deleting element ${array.length - i}:`, heap);
}

// Copy the sorted heap back to the array
for (let i = 0; i < heap.length; i++) {
  array[i] = heap[i];
}

console.log("Sorted Array:", array);
