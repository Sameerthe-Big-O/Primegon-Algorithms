//*contigous memory space 

//*how memory interpreted   
//*the way we tell computer interpreted 
//*each item as  some bits for computer for integers it's the each item is 8 bits or 1 byte long
//*An offset is used to determine the position of an element or a specific memory address relative to the starting point of a data structure. 

//*basicallly tells us how much unitI(bits) we've to move from the starting point to get that specific point in the memory offset is usually represented in terms of bytes or other units of memory 

//width * offset and then edit or give that value  

//*imagine that we've array [1,2,3]; for computer it's lime [8,8,8](bits) now let's say we tell the computer to go to the index 2 how it's recognize that how much bits it has to jump here it uses the offset formul  index=[width*offset] [8*2] =16 means that it has jump 16 bits and if you see clearly first two elements makes upto 16 bits so what the starting point yes 17 bit so it'll read 17 to 24 include which's 8 bits and convert that into digit by conversion like hexadecimal or something and will give us back the original digit which's 3 i just wanted to explain since array in js aren't the native
const r=new ArrayBuffer(6);

r;

const [2]=0x455;

ins=a+width*offset

//*don't insert it instead it overite it because you do not get to grow into memeory  

//*we don't delete something instead we just set to 0 , when we're deleting this elements at very something means we're making that element as null or 0 


//*remember js arrays aren't the arrays because technically we don't grow the array so there's some sort of behind the scenes going on which makes this possible  

//*array don't have these capabilites i means it's js who adjust these indecies otherwise once you delete element from the array it you just null that shit but ti don't happene in js because of ecma 


//!points to remember 

//*you can't really delete you can zero our something null

//*you can't really insert you can write something 

//*it's not growable 



//*you can't realy inset into an array without actualy writing for loops manually to shift all the everything iver , then put your value or unshift everything and write over your value and if your were to delete  


//*write and gettting is O(1)



//*here is the example of manually creating an array for the better understanding of
class MyArray{
    constructor(){
       //*remember that array indexe are start from 0 
       this.length=0;
        this.data={}
    }
     get(idx){
       return this.data[idx]
     }
      push(item){

      //*what this is saying is that add the item at 0 index but then increase the length means when array length is 1 means that means that we've one item at 0 index since we know that in computer science it usually starts at 0 index  so
                                     0
      //*is arr=[], arr.push(1) = arr[1]
      
      this.data[this.length]=item;
      this.length++; 
      return this.length   
      }
      pop(){

      //*pop is same just remove the item from the last remember that for the we'd do length-1 because array elements are located i index or number less  
      const lastIitem=this.data[this.length-1];
      delete this.data[this.length-1]   
      this.length--; 
      return lastIitem;   
      }
      delete(idx){
      const item=this.data[idx];   
      this.shitIfTems(idx);
       return item    
      }
      shitIfTems(index){
         for (let i = index; i < this.length-1; i++) {
               this.data[i]=this.data[i+1]   
          };
         delete this.data[this.length-1];
        this.length--;

      }
    }


//!push cost: O(1) time
//!unshift cost: O(n) since all the indexes have to shift 
//!insertion expect at the end cause us the O(n);





    //!questions
//     I would like to confirm something that's related to array, especially around Big O()
// Since we know that array are technically not growable means we don't get to grow the arrays in most programming languages they are created with fixed size Like `C`

// but js allows us to add dynamically right :
// but under the hood, it's done by copying all the previous elements and adding a new element into a new memory location means that it can cost us `O(n)` as i've seen in most articles 
// (now this O(n)) is for both time complexity and space complexity?

// two questions confirmation:

// ```js
// let arr=[1];
// arr. push(2);//question now that we add new item means a new array in memory will get created with a previous values and new value [1,2]

// //!when the new array is created with an update value Aka dynamic the previous will get garbage collected automatically?

// second thing i want to confirm if this is the case then why adding at the end would cost us O(1) i mean it
```