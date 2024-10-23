class Tree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  add(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new Tree(value);
      } else {
        this.right.add(value);
      }
    }

    if (value < this.value) {
      if (this.left === null) {
        this.left = new Tree(value);
      } else {
        this.left.add(value);
      }
    }
  }

  prettyPrint(node = this, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  bfs(callback) {
    const queue = [];
    queue.push(this);
    while (queue.length > 0) {
      let current = queue.shift();
      callback(current);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }
}

const tree = new Tree(7);

tree.add(4);
tree.add(10);
tree.add(2);
tree.add(1);
tree.add(6);
tree.add(5);
tree.add(9);
tree.add(8);
tree.add(11);

// put the numbers in the tree above in an array

// [7, 4, 10, 2, 1, 6, 5, 9, 8, 11]

// Pretty print the tree
tree.prettyPrint();
tree.bfs((node) => console.log(node.value));
