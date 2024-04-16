//!these are the rules which you must remember and these covers 95 % inteview cases
/*
1:drop the constant 
2:different terms for different inputs
3:always the looks for worst case
4:growth is with respect to the input 
5:drop the non-doiminant
*/

//!don't worry i've example foe these rules



//maths refresh 

//*division is just the inverse multiplication of 



//*a logrithem is the number that a some number needs to be raised to get some other number mind hurts don't worry ???

//*eg if we want to get the log of 8 and let's say that we've the base of 2(remember in computer science we take base 2) then what number needs to be raised to get that number it's "3" 2*3=8 so three is the logirithm means that when we give n inputs to somethings the amount of time the loop will be time or the number to which we multiply with 2 becomes the n  

// the below code fragment can be found in: 

/*
  function Log(n){
 if(n===0) return 'Done';
 n = Math.floor(n/2);

 return func(n)
 };

 log(8);

 this code function will runs only the 3 time which log 2 base and is equivalent to the ================================================================= 8 


*/


//*example of the different terms for the different inputs
function different(arr,arr2){
    arr.array.forEach(element => {
        console.log(element)
    });
    arr2.array.forEach(element => {
        console.log(element)
    });
}
//*big will be the  O(???)

//*Hint:if these two loops were actually one in another then the big(O)  would be the O(a*b)


//*example for n*2
/*
function main(arr) {
arr.forEach(function(v) {
    arr.forEach(function(v){
     
    })
    }
})}

//big O() will be the n*2 === n*n
/*

//!RULE OPF THUMB IS ANYTHING STEPS THAT HAPPENES IN THE SAME INDENTATION YOU ADD AND ANY STEPS THAT NESTED YOU MULTIPLY IT
//*example of  drop non-dominant and worst case

//*function printNumbersThenAllPairs(numer) {


    for (let i = 0; i < numer.length; i++) {
        console.log('these are the number',numer[i]);
    }
 

    arr.forEach(function(v) {
    arr.forEach(function(v){
     console.log('these are their sums',numer[i]);
   })

    })

    //*the  reason we ignore the non-dominant is that we always looks for the worst case and if we have n*2 and n then which one should we choose n*2 right since we mentioned we looks for the worst case you might argue sameer but what if n=34 and n*2=60 the difference is so small yeah it's true as i said we always look for the worst case if n= 100 but then n*2 will be the 1000000 rigt??? means that n*2 will be the larger then n right i hope this make sense

    //*n + n*2 ==== O(n*2)
}
*/


//*challenge 


function funChallenge(){
    let a=23;
    a=80+4;


    for(let i=0; i< input.length; i++){
       anothet();
       let strange=true;
       a++
    };
    return a;
}


//*big(n+n=? + 3) now what will the O(n)

//*challenge
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; 
    let b = 10; 
    let c = 50; 
    for (let i = 0; i < input; i++) { 
      let x = i + 1; 
      let y = i + 2; 
      let z = i + 3; 

    }
    for (let j = 0; j < input; j++) { 
      let p = j * 2; 
      let q = j * 2; 
    }
    let whoAmI = "I don't know"; 
  }
  // Big 