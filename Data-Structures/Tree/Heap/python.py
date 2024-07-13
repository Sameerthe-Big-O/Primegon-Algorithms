heap = []

# Function to insert elements into the heap
def insert_in_heap(num):
    if len(heap) == 0:
        heap.append(num)
        return
    heap.append(num)
    current_index = len(heap) - 1

    while current_index > 0:
        parent_index = (current_index - 1) // 2

        if heap[parent_index] < heap[current_index]:
            temp=heap[parent_index]
            heap[parent_index]=heap[current_index]
            heap[current_index] = temp
            current_index = parent_index
        else:
            return

# Function to delete the root and restore the heap property
def delete_root(size):
    if len(heap) == 0:
        return

    # Swap the root with the last element in the current heap
    temp=heap[0]
    heap[0] = heap[size-1]
    heap[size-1] = temp
    print(heap[0], heap[size - 1], heap)
    current_index = 0

    while current_index < len(heap):
        left_child_index = 2 * current_index + 1
        right_child_index = 2 * current_index + 2

        #the reason fior size-1 is that so that it doesn't check the element we just pop
        if left_child_index < size - 1 and heap[current_index] < heap[left_child_index]:
            heap[current_index], heap[left_child_index] = heap[left_child_index], heap[current_index]
            current_index = left_child_index

        if right_child_index < size - 1 and heap[current_index] < heap[right_child_index]:
            heap[current_index], heap[right_child_index] = heap[right_child_index], heap[current_index]
            current_index = right_child_index

        break

# Example usage
array = [40, 30, 15, 10, 20]

# Insert elements into the heap
for i in array:
    insert_in_heap(i)

print("Initial Max Heap:", heap)

# remember when we use the range in the python it doesn't include the inclusive range
for i in range(len(heap) - 1, 0, -1):
    delete_root(i + 1)
    print(f"Heap after deleting element {len(array) - i}:", heap)

# Copy the sorted heap back to the array
for i in range(len(heap)):
    array[i] = heap[i]

print("Sorted Array:", array)


groceries = ["bananas","butter","cheese","toothpaste"]
for index, grocery in enumerate(groceries):
    print(f"Grocery: {grocery} is at index: {index}.") 
    
    
for i in range(1,10,2):
 print(i)