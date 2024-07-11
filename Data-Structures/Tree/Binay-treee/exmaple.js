/*

  !good at searching and great for comparing things
  !preserver relationships 

  !all child nodes in the tree to right of either parent and root must be greater then the parent orn current node,vice verca left

  !a node can have upto two children

*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//*Two thing are important for insertion
/***
    1:update the current node and keep trac
    2:*if the value < current node value then go to the left curr=curr.left
    2:*if the value > current node value then go to the right curr=curr.right
***/

//!first try of binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currenNode = this.root;
      const newNode = new Node(value);
      let condition = true;
      while (condition) {
        //left side
        if (value < currenNode.value) {
          if (currenNode.left !== null) {
            currenNode = currenNode.left;
            continue;
          } else {
            currenNode.left = newNode;
            condition = false;
          }
        }

        //right side
        if (value > currenNode.value) {
          if (currenNode.right !== null) {
            currenNode = currenNode.right;
            continue;
          } else {
            currenNode.right = newNode;
            condition = false;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return "tree is empty";
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
    return `the value ${value} doesnt exist in the BST`;
  }

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
console.log(tree.lookup(20));
// JSON.stringify(traverse(tree.root))
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//*proper delete implementation damn didn't know it'd be that much interesting

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //*Two thing are important for insertion
  /***
      1:update the current node and keep trac
      2:*if the value < current node value then go to the left curr=curr.left
      2:*if the value > current node value then go to the right curr=curr.right
  ***/
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currenNode = this.root;
      const newNode = new Node(value);
      let condition = true;
      while (condition) {
        //left side
        if (value < currenNode.value) {
          if (currenNode.left !== null) {
            currenNode = currenNode.left;
            continue;
          } else {
            currenNode.left = newNode;
            condition = false;
          }
        }

        //right side
        if (value > currenNode.value) {
          if (currenNode.right !== null) {
            currenNode = currenNode.right;
            continue;
          } else {
            currenNode.right = newNode;
            condition = false;
          }
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return "tree is empty";
    }
    let currentNode = this.root;
    //*necessary check if we don't do this then we will get infinite loop because that number be
    //either will be never less then current 1<1 or greater 1>1
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
    return `the value ${value} doesnt exist in the BST`;
  }

  /*when we remove some item we have usually three cases
  1:one either the node is leaf which's actually very easy beacuas we just have mark that node as 
   null
  2:the node has one child which is easy to handle all have to do is just point the parent node to 
  the child node 
  */
  remove(value) {
    if (!this.root) {
      return "tree is empty";
    }
    let previousNode = "";
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        //leaf node case:1
        if (currentNode.left === null && currentNode.right === null) {
          if (!previousNode) {
            this.root = null;
          }
          if (previousNode.left === currentNode) {
            previousNode.left = null;
          } else if ((previousNode.right = currentNode)) {
            previousNode.right = null;
          }

          //*we don;t need this because it'll be grabge collected
          return;
        }

        //*case 1: if has two childrens
        if (currentNode.left !== null && currentNode.right !== null) {
          let parent = currentNode;
          let temp = currentNode.right;

          //*first go the right side of delete Node there wil be right side of delete node
          //*Find the in-order successor (smallest node in the right subtree)
          while (temp.left !== null) {
            parent = temp;
            temp = temp.left;
          }

          // Replace currentNode's value with the successor's value
          currentNode.value = temp.value;

          //*this is in the case where we the root node is the node we have to remove

          //!also we kept in mind there's possibility that the one we want to remove can actually have right
          if (parent === currentNode) {
            parent.right = temp.right; // Successor might have a right child
          } else {
            parent.left = temp.right; // Successor's parent points to successor's right child (if any)
          }
        }

        //one child means that replace the node with it's child
        if (currentNode.left === null) {
          //*means that the only child is on the right side but first we need to remove reference
          //of parent that's referencing the current node(aka delete Node)

          //! keep in mind that the node we want to remove the their parent should be reference to the child of node we want to remove
          let parenReferenceToChild = "";
          if (previousNode.left === currentNode) {
            previousNode.left = null;
            parenReferenceToChild = "left";
          }
          if (previousNode.right === currentNode) {
            previousNode.right = null;
            parenReferenceToChild = "right";
          }
          currentNode = currentNode.right;
          previousNode[parenReferenceToChild] = currentNode;
          return currentNode;
        }
        if (currentNode.right === null) {
          let reassingHolder = "";
          if (previousNode.left === currentNode) {
            previousNode.left = null;
            reassingHolder = "left";
          }
          if (previousNode.right === currentNode) {
            previousNode.right = null;
            reassingHolder = "right";
          }
          currentNode = currentNode.left;
          previousNode[reassingHolder] = currentNode;
          return currentNode;
        }
      }

      if (value < currentNode.value) {
        console.log(
          `${value} is less then the current node ${currentNode.value}`
        );
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else {
        if (value > currentNode.value) {
          console.log(
            `${value} is greater then the current node ${currentNode.value}`
          );
          previousNode = currentNode;
          currentNode = currentNode.right;
        }
      }
    }

    return `the value ${value} doesnt exist in the BST`;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(7);
tree.insert(14);
tree.insert(200);
console.log(JSON.stringify(traverse(tree.root)), "\n");
// tree.remove(1);
// console.log(JSON.stringify(traverse(tree.root)), '\n');
// tree.remove(20);
console.log(tree.remove(9), "\n");
console.log(JSON.stringify(traverse(tree.root)), "\n");
// tree.lookup(15);
// tree.lookup(7);

//     9
//  4     20
//1  6  15  170
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

if (currentNode.right === null) {
  currentNode.value = currentNode.left.value;
  currenNode.left = null;
  return currentNode;
}

if (currentNode.left === null) {
  currentNode.value = currentNode.right.value;
  currenNode.right = null;
  return currentNode;
}
