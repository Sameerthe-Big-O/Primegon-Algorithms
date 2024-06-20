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


//*complete example of stack with Linked List 


//*step 1:

//pop:remember that in the stack we the last item will be the first oine means that when we we say last item means that's actually the head of our stack means we use the terms opposite the first one we say as the tail and last one we refer as the head 
---- //this is the head of our stack
----
---- //this is the tail of our stack

//*push first we grab the head means tha last item and save it in a variable
//*pop then we mark the new item as ahte head this.head=newNode
//*then we mark  next of new head to previous head 



//!the best way to learn is actually br wrting on the paper

//*arrays allows us the cache location which makes accessing mucch more faster then using with linked list because elements are right next to each other.

//*while linked are scattre in the memeory so that's why we have to traverse to get the element 

//*while link list also takes more variables because we have to manage those pointer

//*arrays are  bad at insertion or deletion  because arrays are static arrays so language make another copy of that array means doubel the space

//!question new array cause other to be garbadge collected


//*if we change the index then it'd have to move all the indexs of tha previous array item



//*one of the prominant example of stack is undo and redo we use on the daily bases


//*eg whatever you're writing if just do the backspace key press it'll pop the thing you typed most recent and will take you to the element that was second latest character and if you want to go the the thing that you typed first then you'll have press the backspace key until you actually go back to the character you typed means that the first character you typed becomes the last character


//*another example is let's imagine that you've open browser you you've typed youtube it takes you to youtube but if you click on the other link that takes you to the anohte website but now you want to go back to youtune you click back under the hood you pop the latest element which's website you went when you clicked on link

//!if the space got voilated then it'd have to double the memeory in computer again
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
  if(!this.head){
  return null;
  }
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


  /*
   !stack are pretty useful with array when we pop the element since in the array removing the last element cost us the O(1) time complexity

   !also to add the new add as the last it also cost us the O(1)



  !with linked list
   
  Time Complexity: O(1), Only a new node is created and the pointer of the last node is updated. This includes only memory allocation operations. Hence it can be said that insertion is done in constant time.

  Auxiliary Space: O(1), No extra space is used.

  */




  //* so basically 
  class StackWithArray{
    constructor(size){
    this.array=[];
        this.size=size || 10; 
      };
    
      push(value){
        if(this.size === this.array.length){
        throw new Error("StackoverFlow you need to clear the memory")
        }else{
          this.array[this.array.length] = value;
          return this.array;  
        }
      }
       pop(){
        if(this.isEmpty()){
         return 'stack is empty';
        }
        this.array.pop();
        return this.array;   
       }
       peek(){
         if(this.isEmpty()){
           return 'stack has no function';
         }
       return this.array[this.array.length-1];
       }
      isEmpty(){
     if(this.array.length===0){
          return true;
        }else{
          return false;
        }

      } 
    }

//*call stack in js simply means what which function is getting executed at the momebt, stack means that it whenever some function is get called it's get put on the call stack so call stack has functions of stacks and the function that was get last will be get executed first


//!questions
  //*why array wouldn't cause the insertion at the O(n)even if we add at the last;