//*to store heap either in an array or linked list weh have two rules

//*first we have to maintain the relationship like parent and child.Now this is actually easy using linked list where references

//*in arrays we store these level be level for maintaining the relationship

//*left child 2*i (i is the index of the node)
//*right child 2*i+1
//*parent will be i/2 floor value

//!if any element is missing then we should just placed empty at that placed

/*
    10
  /    \
 3      11
       / \
      8   12

*/

/*

 here as you can see that 3 has no but if we want to follow the formula we
 need to fill empty at that place

[10,3,11,'','',8,12]
*/

//!full vs complete binary tree
/*
  full binary tree means that each node has 0 or 2 child
  when to comes to the binary tree representation of any array then there should no gap between element be then it's called the complete binary tree

  means that all the levels except the last level should have maximum number of nodes and last level should have nodes starting from the last to the right

  a complete binary tree representation is a full binary tree upto h-1
  and in the last level elements are filled from left to right
  means that that in the last level if there's no one node of previous parent then it should be left not to the right if both are there that be okay too 

  !height of complete binary tree will be logn();

  !we can represent the not-complete binary tree in an array but then we have to put gap, where nodes aren't there so basically we've to use 
  don't worry i've included the example below with diagram
*/

/*




There is a difference between a STRICT and FULL BINARY TREE.

1) FULL BINARY TREE: A binary tree of height h that contains exactly (2^h)-1 elements is called a full binary tree. (Ref: Pg 427, Data Structures, Algorithms and Applications in C++ [University Press], Second Edition by Sartaj Sahni).

or in other words

In a FULL BINARY TREE each node has exactly 0 or 2 children and all leaf nodes are on the same level.

The following are examples of a FULL BINARY TREE:

a.

          18
       /      \   
     15       30    
    /  \     /   \   
  40    50  100  40 
b.

        18
       /  \   
     15    30 
                   
2) STRICT BINARY TREE: Each node has exactly 0 or 2 children.

The following are examples of a STRICT BINARY TREE:

a.

         18
       /    \   
     15      30    
    /  \          
  40    50
b.

          18
        /    \   
      15      30    
     /  \          
   40    50
  /  \
20    45      
I think there's no confusion in the definition of a Complete Binary Tree, still for the completeness of the post I would like to tell what a Complete Binary Tree is.

3) COMPLETE BINARY TREE: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible.

For Example: The following is a COMPLETE BINARY TREE:

           18
       /       \  
     15         30  
    /  \        /  \
  40    50    100   40
 /  \   /
8   7  9 
Note: The following is a Complete Binary Tree and also a Full Binary Tree by definition:

         18
       /     \   
     15       30    
    /  \     /   \   
  40    50  100  40 
Conclusion So, a Full Binary Tree is also a Complete Binary Tree. But the converse is not true

ref:https://stackoverflow.com/questions/12359660/difference-between-complete-binary-tree-strict-binary-tree-full-binary-tre/32064101#32064101
*/

/*

   !notice that heap is complete binary tree

   !max heap (first it must satisfy it's a compelete binary tree then each node value must be either equal or greater than the child one's) duplicates are allowed here
    laregest will be root node
   !min heap (first it must satisfy it's a compelete binary tree then each node value must be either equal or less than the child one's) duplicates are allowed here
    smallest will be root node

*/
//!quick revesiuion

/*


To store a heap in an array or linked list, two rules need to be followed
The relationship between parent and child nodes must be maintained
This relationship is easier to maintain using linked lists
In arrays, levels are stored level by level to maintain the relationship
The left child of a node can be found at index 2*i
The right child of a node can be found at index 2*i+1
The parent of a node can be found at index i/2
If an element is missing in the heap, an empty space should be left in its place
A full binary tree has each node with 0 or 2 children
A complete binary tree has all levels filled except possibly the last level
In a complete binary tree, the last level is filled from left to right
A complete binary tree is a full binary tree up to h-1 levels
The last level of a complete binary tree is filled from left to right
There is a difference between a strict and full binary tree
In a strict binary tree, each node has exactly 0 or 2 children
A complete binary tree has all levels completely filled except possibly the last level
The last level of a complete binary tree has all keys as left as possible
A full binary tree is also a complete binary tree, but the converse is not necessarily true.
*/
