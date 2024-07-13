//*heap

//*full binary tree means that expect the leaf node there will be no node who will have 0 children

//*where the complete binary tree there's no such that a node can have one node even that's not leaf node.One more thing to remember is that in complete binary tree nodes are placed in a order from left to right

//*when a value means that it can be anything like a person name or a number or any type of data we want to store in it

//*a bianry heap itself is a tree where the node are placed in the way that there should be restrictions iike the node we want to either should less then or greater then parent

//!two types min and max heap?

//!max heap
//A max binary heap is simple a tree where each parent has maximum value means that children of the parent it doesn't matter either on left side or right side will be lower or eqeual to parent node value also  know as the max heap. The largest value will be at up most

//!in binary heap every node at the top level has greater value child levels
//!there's no concept of unbalanced tree
//!in binary heap every node at the top level
//!preserves order of insertion
//!use cases when we want the order

//*min heap is same but exactly the opposite means that the smallest value will be at the up most

//*loopup is theo  O(n)  because they're less ordered then binary search tree

//! great at the comparitive value
//*binary search also had the proper meamning and the relationship
//*insert O(log n) , worst case(log n), best case O(1)
//*delete O(log n)

//*piority queue

//A priority queue is a data structure that maintains the order of elements in a way that allows access to the highest priority element. It is an extension of a binary heap, where the highest priority element is always at the root.

//*we can implement priority queueu via arrays or linked list or even node likes as well

//*binary heaps are great for the pioriority queue where we let the person comes who has the hight piority

//*in priority queue is it's possible that the one or the task come later can have the higher piority now since now the new item has higher priority now the high will be first to execute pr whatever or we mark captan as the root node

//*order goes from left to the right

//*better then O(n)
//*priority
//*flexible size
//*fast insert

//*insertion in min min heap
//*first shape
//*Invariant (node are never greater then the children's)
