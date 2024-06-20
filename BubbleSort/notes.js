//*bubble sort is sorting algorithm which has the Big(O) of n*2 in the worst case 


//*this algorithm works by comparing adjacent elements and if the element to the left is greater we simply swap those elements 

//*one more point to noted is that on each iteration we sort the biggest element in the array 

//*now finally let's visualize this shit here 


//*consider array [5,3,2,-1]

//*we'll loop and on each first iteration 

//*remember we need the nested loop right because if we compare 5 to 3 at first then what if 5 is also greater then point which after the 3 right so we've to compare 5 with each element that's we compare 5 with each element of 



//*let's compare the 5 > 3 ???? yes swap . Here the code to swap if(arr[index] > arr[index+1):imagine index is 0 then 

for (var i = 0; i < Array.length; i++) {
    for (var j = 0; j < Array.length; j++) {
            
    }
}
/*
 *const temp = arr[index]=5
 *arr[index] = arr[index+1]=3
 *arr[index+1] = temp =5

 *we need the temp to temporarily store the value because let's imagine that without temp we assing arr[index]=arr[index+1] now the second value will get override right so to preserver that we need that 
*/

//*complete code
for (var i = 0; i < Array.length; i++) {
    for (var j = 0; j < Array.length; j++) {
            if(arr[i]> arr[j+1]){
                const temp = arr[index]=5
                arr[index] = arr[index+1]=3
                arr[index+1] = temp =5
               
            }
    }
}

