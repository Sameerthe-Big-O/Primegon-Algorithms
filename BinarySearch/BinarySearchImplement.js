export default function two_crystal_balls(breaks: boolean[]): number {

    let jumpNumber =Math.floor(Math.sqrt(breaks.length));

   let i=jumpNumber;
   let counter=0;
   
    for ( i ; i < breaks.length; i +=jumpNumber) {   
            if(breaks[i]){
                counter++;
                 break;
            };           
    };
    i=i-jumpNumber;
    for (i; i < breaks.length; i++) {
        if(breaks[i]){
          return i;
        }
    };
    //*incase don't find it 

  return -1;
//*i was able to solve this at my first turn without seeing prime logic  so make sure you understand the topic
}