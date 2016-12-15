function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element),
            current;

        if (head === null) { // first node on list
            head = node;
        } else {
            current = head;

            // loop the list until find last item
            while (current.next) {
                current = current.next;
            }

            // get last item and assign next to node to make the link
            current.next = node;
        }

        length++; // update the size of the list
    };

    this.insert = function (position, element) {
        // check for out of bound values
        if (position > 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                next;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        // check for out-of-bounds values
        if (position > -1 && position < length) {

            let current = head,
                previous,
                index = 0;

            // removing the first item
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // link previous with current's next: skip it to remove
                previous.next = current.next;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        let current = head, //{1}
            index = -1;

        while (current) {   //{2}
            if (element === current.element) {
                return index;       //{3}
            }
            index++;                //{4}
            current = current.next; //{5}
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.toString = function () {
        let current = head, //{1}
            string = '';    //{2}

        while (current) {   //{3}
            string += current.element + (current.next ? 'n' : '');//{4}
            current = current.next;   //{5}
        }
        return string;                //{6}
    };

    this.getHead = function(){
        return head;
    };

    this.print = function () {
    };
}

let list = new LinkedList();
list.append(15);
list.append(10);