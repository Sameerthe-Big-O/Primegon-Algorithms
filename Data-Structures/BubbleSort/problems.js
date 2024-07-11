export default function bubble_sort(arr: number[]):number[]{
      
    //* O(n*n);
    
    for (let index = 0; index < arr.length; index++) {
        let temp=0;
         for (let j = 0; j < arr.length-1-i; j++) {
          if(arr[j] > arr[j+1]) {
              temp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp;
               if(arr[j+1] > arr[j+2])
         }  
         }
         
      };
       return arr;
}

//*your challenge is to make time complexity O (n logn)