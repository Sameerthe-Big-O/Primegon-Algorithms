/*
                      50
                30          20
             15   10      8     16


 let array=[50,30,20,15,10,8,16]



 let say that now i want to add an element that's greater then 50 what we do now

 simple when using an array we just push onto the last place 
 array.push(60)


                      50
                30          20
             15   10      8     16
          60

 but this violates the rules of having max heap now what should we do 

 ! we need to compare the value with it's parent and if element doesn't satisfy the condition then swap 16 parent is 15 and we know the formula to get parent which's [i/2] 7/1 =3 

 n(log n) worst 
 on the 3rd we have 15 
 now  is 15 less then 60 yes then swap them 
 but first we need a temp variable

 let temp=array[array.length-1];
 array[array.length-1]=array[3];
 array[3]=temp;

 let array=[50,30,20,60,10,8,15]

 again loop iteraion now check 60 parent again 

 but remember 60 at index 3 now so divide it by 3/2

 we'll get 1 

 again swap 

 let array=[50,60,20,30,10,8,15]

 now again divide it by 1/2 =0.5 floor value =1

 now compare 50 and swap again

 let array=[60,50,20,30,10,8,15]


 !delete operation n(log n) worst


 !three elements rules 

 we will always delete the root from the max heap

 last element will takes of root node who was just got removed
 in array the last element will be replaced with first element 
 
 we adjust from the root towards the leaf means that updated root node will get compare with it's children and if didn't satisfy the condition we just swap that.we push the elememts downwards towards leaf and adjust the element if until it's become greate then it's children

 we've to compare the new root node with the it's children value and if we need to swap then just swap 
 

                      50
                30          20
             15   10      8     16

 let array=[50,30,20,15,10,8,16]

 let say that 50 has be deleted first rule already satisfied



                       16
                30          20
             15   10      8     
 
  let array=[16,30,20,15,10,8, ]   
  
  now second step is done also where re replace the values

  third step is now maintain the complete binary tree order
  by adjusting 16 with his children from left to right
and what are those 30, 20

   let array=[16,30,20,15,10,8]

   16 is less then 30 yes swap with 30

   once the swap done goto next iteration

                     30
                16          20
             15   10      8     
 
   now again check is 16 greater then 15 yes then don't swap it

   let array=[16,30,20,15,10,8, ]   
   and here's we go we have delete the item with maintaning compelete binary tree
 */
