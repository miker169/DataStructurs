export const Stack = (function() {
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }
        // other methods

        push(element) {
            let s = items.get(this);
            s.push(element);
        }

        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }

        peek() {
            let s = items.get(this)
        }

        isEmpty() {
            return items.get(this).length == 0;
        }

        clear() {
            items.set(this, []);
        }

        size(){
            let s = items.get(this);
            return s.length;
        }
    }
    return Stack;
})();