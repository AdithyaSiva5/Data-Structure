class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Sample workout 1: Insertion
  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  insertNode(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  // Sample workout 2: Contains
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

  // Sample workout 3: Traversals
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
const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.contains(5)); // Output: true
console.log(tree.contains(8)); // Output: false

console.log("Preorder traversal:");
tree.preOrderTraversal(); // Output: 10, 5, 3, 7, 15
console.log("Inorder traversal:");
tree.inOrderTraversal(); // Output: 3, 5, 7, 10, 15
console.log("Postorder traversal:");
tree.postOrderTraversal(); // Output: 3, 7, 5, 15, 10
