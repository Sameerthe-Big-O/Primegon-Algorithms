//*we basically first randomly check the element or the mid element of the array and if that's not then we check the half of the array 

//*LOW Should be included but high shouldn't be included  

//*include one but we should exclude the 1 or high 

//*the way this works is like we divide the array until we get out point 

//!note array has to be sorted 

//[1,2,3,4,5]


//*now we want to check whether the elemnet is exsit or not   

//presduo code 

//*divide array by mid point m=(h=l/2)

//*now array[mid] check if the mid is element we're looking for if(arr[mid]===element) 

//*if yes then return true 

//*if mid is greater then the our number means we want to find 4 then what should we do ???

//*we set the lowest point to l=m+1 the reason is one because we're already check mid right means number will be greate then mid so very next element to that should be 

//*again divide the number mid=Math.floor(l+h/2);

//*now mid will be the 3 index means the 4 right we've got our 

