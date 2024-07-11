/*

 !each node can only have either 0,1 or 2 children
 !maximum 2 childiren 

 !each child can only have one parent
 !when we search through these tree it become binary search
 
 !a perfect binay tree is the tree where each node has two children, means no node has one children, 
  properties 
            number of nodes on each level get duouble.
            number of node at the last level is equal to number of nodes on all levels +1.
            half of our node on the last level.
            !benefits
                     if we somehow avoids visiting the every node even that's on very bottom
                     O(log n) time complexity

                     we can calculate level of node o
                     n each level
                     by uisng math like the =2*level
                     !start from the 0 index as well as arrays
                     eg:level:0: 2*0 =1 means one node only
                     eg:level:1: 2*1 =2 means two node only
                     eg:level:2: 2*2 =4 means four node only
                     eg:level:2: 2*3 =8 means eight node only
                     !but overall length start from 1 like if we have 3 level means total number of nodes node=2*3-1;
                     !so we have 2*3-1=7 means 7 node only
                     !so we have 2*4-1=15 means 15 node only
                     but the index is like 0,1,2 for binary tree that has 3 levels
                     # of nodes = 2*h-1,because we start form the 0 index
                     log nodes=step || level number of steps   

                     basically log(8)=3 what does this means is that it'd take 3  operation to search for it normally either in array or in some other way

                     but since we're 

                     but since we're talking about perfect binary tree means that if we have 8 node it'd cost us three operation to search for it, but that number is equalent to the number of levels in binary tree easy for us to determine but there should some condition associated to select next node,otherwise we search three operaton and get nothing and then again we do the same and gain nothing there are multiple path to reach to last node so it can even become N(long n)

                     !mean the choice of next element to be choosen is one of the several possibilities, and only one needs to be choosen and we don't have to choose both otherwise time complexity will be the O(n) or worse

                     !Divide and conquer approach we only need to explore subset

                     log 100=2;
                     10*2=100;
                     remember that log is just a number that's number to raised to get some number
                        in mathematics, the logarithm is the inverse function to exponentiation. That means that the logarithm of a number x to the base b is the exponent to which b must be raised to produce x. For example, since 1000 = 103, the logarithm base 10
                        {\displaystyle 10} of 1000 is 3, or log10 (1000) = 3. 

                     meaning that if we had 8 item in array and we want to search it then we'd have to search every element of the array,but since we're using the tree and especially the binary which's perfect.When our number of operations would be reduce to 3 why because it'd search through level

                     basically in binary tree the height is our number of steps it has to perfrom which are O(log n) but with some coditional

                     !when we perform binary search in an array then we follow the divide and conquer approach
                     
                    


 !bottom layer is completely filled 

 *full binary tree 
 !a node has only either 0 or two children
*/

//*Binary search tree are usually refers as perfect binary search tree
//*this data structure preserver relationships
//*all child in the tree to the right of root node must be greater than current node as we go the right the value wil get increase as well

//!in simple term if we go right it should be greater then the current node aka parent node
//!in simple terms if we go left it should be less then the current node aka parent node
//!a node can have only two children

//!lookup
//!insert
//!delete



//!now two referene can points to the same node
// better then O(n)
// Ordered 
// flexible Size

function BinaryTreeNode(value) {
  this.Value = value;
  this.left = null;
  this.right = null;
}


