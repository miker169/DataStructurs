export const Queue = (function() {
   const items = new WeakMap();

   class Queue {
       constructor() {
           items.set(this, []);
       }

       enqueue(element) {
           let q = items.get(this);
           q.push(element);
       }

       dequeue() {
           let q = items.get(this);
           let r = q.shift();
           return r;
       }
       front() {
           return items.get(this)[0];
       }
       isEmpty() {
           return items.get(this).length == 0;
       }
       size() {
           return items.get(this).length
       }
       print(){
           console.log(items.toString());
       }
   }

   return Queue;
})();
