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