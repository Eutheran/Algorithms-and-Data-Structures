class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
    //how many times a number has repeated itself
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curNode = this.root;
      while (true) {
        if (newNode.value === curNode.value) {
          curNode.count++;
          break;
        } else if (newNode.value > curNode.value) {
          if (!curNode.right) {
            curNode.right = newNode;
            break;
          } else {
            curNode = curNode.right;
          }
        } else {
          if (!curNode.left) {
            curNode.left = newNode;
            break;
          } else {
            curNode = curNode.left;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return false;
    let curNode = this.root;
    let found = false;
    while (curNode && !found) {
      if (value === curNode.value) {
        found = true;
      } else if (value > curNode.value) {
        curNode = curNode.right;
      } else {
        curNode = curNode.left;
      }
    }
    if (!found) return undefined;
    return curNode;
  }

  breadthFirstSearch() {
    let queue = [];
    let valueList = [];
    let curNode = this.root;
    queue.push(curNode);
    while (queue.length !== 0) {
      curNode = queue.shift();
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
      valueList.push(curNode.value);
    }
    return valueList;
  }

  depthFirstSearchPreOrder() {
    let valueList = [];
    const traverse = node => {
      valueList.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return valueList;
  }

  depthFirstSearchPostOrder() {
    let valueList = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      valueList.push(node.value);
    };
    traverse(this.root);
    return valueList;
  }

  depthFirstSearchInOrder() {
    let valueList = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      valueList.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return valueList;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
