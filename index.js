// class Node {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addSubTree(newValue) {
    const newBinarySearchTree = new BinarySearchTree(newValue);

    if(newValue < this.value) {
      if(this.left === null) {
        this.left = newBinarySearchTree;
      } else {
        this.left.addSubTree(newValue);
      }
    } else {
      if(this.right === null) {
        this.right = newBinarySearchTree;
      } else {
        this.right.addSubTree(newValue)
      }
    }
  }

  depthFirstSearch(callback, type) {
    if(type === 'pre-order') {
      callback(this.value);
      if(this.left) this.left.depthFirstSearch(callback, type);
      if(this.right) this.right.depthFirstSearch(callback, type);
    } else if (type === 'in-order') {
      if(this.left) this.left.depthFirstSearch(callback, type);
      callback(this.value);
      if(this.right) this.right.depthFirstSearch(callback, type);
    } else {
      if(this.left) this.left.depthFirstSearch(callback, type);
      if(this.right) this.right.depthFirstSearch(callback, type);
      callback(this.value);
    }
  }

  breadthFirstSearch() {
    
  }
}

const fifty = new BinarySearchTree(50);
fifty.addSubTree(45);
fifty.addSubTree(75);
fifty.addSubTree(12);
fifty.addSubTree(48);
fifty.addSubTree(100);
fifty.addSubTree(95);
fifty.addSubTree(97);

fifty.depthFirstSearch((value) => {
  console.log(value);
}, 'post-order');

// const fortyFive = new BinarySearchTree(45);
// const seventyFive = new BinarySearchTree(75);
// const twelve = new BinarySearchTree(12);
// const fortyEight = new BinarySearchTree(48);
// const oneHundred = new BinarySearchTree(100);
// const ninetyFive = new BinarySearchTree(95);

// console.log(fifty.right.right);