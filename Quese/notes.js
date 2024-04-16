//* a type link list where we put the constraint that we can only access the first and the last element follow the first in and first our aappraoch right 

//*how to implement??

//*terminologies 

/*
*enqueue
*deque
*peek

*enqueue??


*means we've to remove the add element of the queue  for that we need to do some operations
//*since i've already told that last element will be the one who comes in the last 

*[1,2,3,4]  we add 5 so now five become the last 

//*but we're implementing queue in link list so we've  some operations

//*first make the link between newly added node and previous

    this.tail.next = node; 

    now make added node as tail
    this.tail = node;

    *deque
    !save your head
    !udpate your head
    !return the value

        $programmatically code 
        //*first save the head in variable
        //*next update the heaed
        const h = this.head;
        this.head = this.head?.next;

        *did this because there are languages who doesn't have the grabage collector  so i'm explicitly removing
        h.next = undefined;

*/