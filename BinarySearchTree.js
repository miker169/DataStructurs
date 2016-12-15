function BinarySearchTree() {
    const Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    var heightNode = function(node) {
        if (node === null) {
            return -1;
        }else {
            return Math.max(heightNode(node.left),
            heightNode(node.right)) + 1;
        }
    };

    var insertNode = function(node, element) {
        if(node === null){
            node = new Node(element);
        } else if(element.key < node.key){
            node.left = insertNode(node.left, element);

            if (node.left !== null) {
                // verify if balancing is needed
                if ((heightNode(node.left) - heightNode(node.right)) > 1){
                    // do rotations {3}
                }
            }
        } else if (element > node.key) {
            node.right = insertNode(node.right, element);

            if(node.right !== null) {
                if ((heightNode(node.right) - heightNode(node.left)) > 1){
                    // do rotations {4}
                }
            }
        }

    };

    var inOrderTraverseNode = function(node, callback) {
        if (node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    var preOrderTraverseNode = function(node, callback) {
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null){
                node = node.left;
            }

            return node.key;
        }
        return null;
    };

    var maxNode = function(node) {
        if (node) {
            while (node && node.right !== null){
                node = node.right;
            }

            return node.key;
        }
        return null;
    };

    var searchNode= function(node, key){
        if (node === null){
            return false;
        }

        if (key < node.key){
            return searchNode(node.left, key);
        }else if (key > node.key){
            return searchNode(node.right, key);
        }else {
            return true;
        }
    };

    var findMinNode = function(node) {
        while (node && node.left !== null){
            node = node.left;
        }
        return node;
    };

    var removeNode = function(node, key){
        if (node === null){
            return null;
        }

        if (key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        }else if ( key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        } else { // key is equal to node.key

            // case 1 - a leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // case 2 - a node with only one child
            if (node.left === null){
                node = node.right;
                return node;
            } else if (node.right === null){
                node = node.left;
                return node;
            }


            // case 3 = a node with 2 children
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;

            //
        }
    };

    this.insert = function(key){
        var newNode = new Node(key);

        if(root == null){
            root = newNode;
        }else {
            insertNode(root, newNode);
        }
    };

    this.search = function(key) {
        return searchNode(root, key);
    };

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback)
    };

    this.min = function() {
        return minNode(root);
    };

    this.max = function() {
        return maxNode(root);
    };

    this.remove = function(key) {
        root = removeNode(root, key);
    }


}

function printNode(value) {
    console.log(value);
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);
console.log('In order ==============')
//tree.inOrderTraverse(printNode);

console.log('pre order ==============')

//tree.preOrderTraverse(printNode);

console.log('post order ==============')

//tree.postOrderTraverse(printNode);

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');