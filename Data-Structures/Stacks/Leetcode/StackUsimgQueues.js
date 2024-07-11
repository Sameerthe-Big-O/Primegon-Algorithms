//https://leetcode.com/problems/implement-stack-using-queues/

//*our goal is to use two queues to make a stack work

//remember that in stack when we pop the item it's return us last or latest element we push into [1,2,4] -->4 will be returned

//on the other hand queue we use similar operations(which's dequeue or pop) basically remove one item we do from the start the first element that was enterd but push enqueue(push ) works same way means added at the last

//so we've to use two queues one for push and one for pop why

/*
    because let's say we added two item using the queue [1,2,4]
       !the important edge case is that for the test cases fo leetcode there will be two case where they add 2 items and top which'll make queue2=[4,2,1] but then it can want to add anohte items but remember when we copy the elements we make first queue1 empty so now 3 want to get added into queue1 what should we do? 
        $simple now we have to do same copy all elements form queue2 into queue1 and make queue2 empty
     now i want to pop the item now ideally popping or dequeue would return us hte 1 in queue and we can't have pop method what we do here is we copy all the values  from queue1 to queue2 in but in the order which in which last becomes first one so that we can use dequeue(or pop)which return first element 
    [4,2,1] now we can use shift array method which's actually remove the item from the start as we wanted

    for the top method we do the same check if the queue2 is empty [] means that pop hasn't beem executed so we just copy and past elements as we do the only difference here we return whatever at the 0 index of queue2 [4,2,1] we don't remove that element and don't use shift

    what if the queue2 isn't empty then in that case simply return 0 index [4,2] --> 4

    for the empty method we check if the queue1 and queue2 is empty if it's empty means that the stack is empty so we return true if it's not empty we return false
*/
class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(value) {
    if (this.queue2.length !== 0) {
      for (let i = this.queue2.length; i > 0; i--) {
        this.queue1.push(this.queue2[i - 1]);
        this.queue2.splice(i - 1, 1);
      }
    }
    this.queue1.push(value);
  }
  pop() {
    if (this.queue2.length === 0) {
      for (let i = this.queue1.length; i > 0; i--) {
        this.queue2.push(this.queue1[i - 1]);
        this.queue1.splice(i - 1, 1);
      }
    }
    console.log(this.queue2);
    return this.queue2.shift();
  }
  top() {
    if (this.queue2.length === 0) {
      for (let i = this.queue1.length; i > 0; i--) {
        this.queue2.push(this.queue1[i - 1]);
        this.queue1.splice(i - 1, 1);
      }
    }
    console.log(this.queue2);
    return this.queue2[0];
  }
  empty() {
    if (this.queue1.length === 0 && this.queue2.length === 0) {
      return true;
    }
    return false;
  }
}
