class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insertion
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (!node) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }

    // Contains
    contains(value) {
        return this.search(this.root, value);
    }

    search(node, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        if (value < node.value) {
            return this.search(node.left, value);
        } else {
            return this.search(node.right, value);
        }
    }

    // Deletion
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (!node) {
            return node;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.deleteNode(node.right, minNode.value);
        }
        return node;
    }

    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // Traversals
    preOrderTraversal(node = this.root) {
        if (node) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    postOrderTraversal(node = this.root) {
        if (node) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.contains(5)); // Output: true
console.log(bst.contains(8)); // Output: false

console.log("Preorder traversal:");
bst.preOrderTraversal(); // Output: 10, 5, 3, 7, 15
console.log("Inorder traversal:");
bst.inOrderTraversal(); // Output: 3, 5, 7, 10, 15
console.log("Postorder traversal:");
bst.postOrderTraversal(); // Output: 3, 7, 5, 15, 10

bst.delete(5);
console.log("Inorder traversal after deletion:");
bst.inOrderTraversal(); // Output: 3, 7, 10, 15
