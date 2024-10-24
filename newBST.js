class Tree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  // Adds a new value to the binary tree
  add(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new Tree(value);
        // ? Why is the new value inserted as a right child when it's greater than or equal to the current node's value?
      } else {
        this.right.add(value);
        // ? How does recursion ensure the correct placement of the value in the right subtree?
      }
    }

    if (value < this.value) {
      if (this.left === null) {
        this.left = new Tree(value);
        // ? Why do we create a new Tree instance when adding a new value to the left subtree?
      } else {
        this.left.add(value);
        // ? How does recursion facilitate finding the correct spot for the new value in the left subtree?
      }
    }
  }

  // add method with no comments
  addNoComments(value) {
    if (value >= this.value) {
      if (this.right === null) {
        this.right = new Tree(value);
      } else {
        this.right.addNoComments(value);
      }
    }

    if (value < this.value) {
      if (this.left === null) {
        this.left = new Tree(value);
      } else {
        this.left.addNoComments(value);
      }
    }
  }

  // Adds a new value to the tree using a ternary operator
  addTernary(value) {
    const leaf = new Tree(value); // Change from BinarySearchTree to Tree
    if (value < this.value) {
      this.left === null ? (this.left = leaf) : this.left.add(value);
    } else {
      this.right === null ? (this.right = leaf) : this.right.add(value);
    }
  }

  // Recursively prints the tree in a pretty format
  prettyPrint(node = this, prefix = '', isLeft = true) {
    if (node === null) {
      return;
      // ? What happens when the node is null, and why is it important to handle this case in recursion?
    }

    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
      // ? How does this line recursively print the right subtree first?
    }

    // Prints the current node value with prefix formatting
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);

    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      // ? Why is the left subtree printed after the right subtree in this function?
    }
  }

  // depth first pre order without comments
  depthFirstPreNoComments(callback) {
    callback(this.value);
    if (this.left !== null) {
      this.left.depthFirstPreNoComments(callback);
    }
    if (this.right !== null) {
      this.right.depthFirstPreNoComments(callback);
    }
  }

  // Applies a callback function using Depth-First Preorder Traversal
  // Use cases:
  // - Preorder traversal is useful when you need to process or access the root node before inspecting its children.
  // - Suitable for copying a tree structure, as the root node and its children are processed in the exact order they are structured.
  // - Useful in prefix notation for expressions, where operators precede their operands.
  depthFirstPre(callback) {
    // Apply the callback to the current node's value (Root)
    callback(this.value);
    // ? What is the order of traversal in preorder?
    // #region Answer
    // ^ Root, Left, Right
    // #endregion Answer

    // Traverse the left subtree first
    if (this.left !== null) {
      this.left.depthFirstPre(callback);
      // ? How does recursion facilitate depth-first traversal?
    }

    // Then traverse the right subtree
    if (this.right !== null) {
      this.right.depthFirstPre(callback);
      // ? What would happen if we traverse the right subtree before the left?
    }
  }

  // depth first in order without comments
  depthFirstInNoComments(callback) {
    if (this.left !== null) {
      this.left.depthFirstInNoComments(callback);
    }
    callback(this.value);
    if (this.right !== null) {
      this.right.depthFirstInNoComments(callback);
    }
  }

  // Applies a callback function using Depth-First Inorder Traversal
  // Use cases:
  // - Inorder traversal is perfect for scenarios where you want to process nodes in sorted order (for a binary search tree).
  //  - when you need to extract the values in a sorted (ascending) sequence.
  //  - Can be used in situations where you need to check for validity of a binary search tree, as it visits nodes in order.
  depthFirstIn(callback) {
    // Traverse the left subtree first
    if (this.left !== null) {
      this.left.depthFirstIn(callback);
      // ? Why do we traverse the left subtree before processing the current node?
    }

    // Apply the callback to the current node's value
    callback(this.value);
    // ? What is the order of traversal in inorder?
    // #region Answer
    // ^ Left, Root, Right
    // #endregion

    // Traverse the right subtree
    if (this.right !== null) {
      this.right.depthFirstIn(callback);
      // ? How does inorder traversal affect the order of values processed?
    }
  }

  // depth first post order without comments
  depthFirstPostNoComments(callback) {
    if (this.left !== null) {
      this.left.depthFirstPostNoComments(callback);
    }
    if (this.right !== null) {
      this.right.depthFirstPostNoComments(callback);
    }
    callback(this.value);
  }

  // Applies a callback function using Depth-First Postorder Traversal
  // Use cases:
  // - Postorder traversal is ideal when you need to process child nodes before their parent node
  //  - Deleting or freeing memory in a tree
  //  - evaluating postfix expressions where operators follow their operands.
  //  - Useful for calculating properties that depend on the subtrees, such as height of a tree, as all children are processed before their parent.
  depthFirstPost(callback) {
    // Traverse the left subtree first
    if (this.left !== null) {
      this.left.depthFirstPost(callback);
      // ? Why is the left subtree traversed before the right subtree in postorder?
      // #region Answer
      // ^ to ensure the left subtree is processed before the current node - this order is the standard in compsci, and many other algorithms and developers will expect this order
      // #endregion Answer
    }

    // Traverse the right subtree
    if (this.right !== null) {
      this.right.depthFirstPost(callback);
      // ? How does the order of the conditionals affect the callback execution?
      // #region Answer
      // ^ the current node is processed after both subtrees have been processed
      // #endregion Answer
    }

    // Apply the callback to the current node's value
    callback(this.value);
  }

  // breadth first search without comments
  bfsNoComments(callback) {
    const queue = [];
    queue.push(this);
    while (queue.length > 0) {
      let current = queue.shift();
      callback(current);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  // Performs a breadth-first search (BFS) traversal of the tree
  // Use cases:
  // - BFS is useful when you want to explore all nodes at the same depth (level) before moving to the next level.
  // - Ideal for finding the shortest path in an unweighted tree/graph, as it processes nodes level by level.
  // - Can be used to serialize or print a tree structure, as it visits nodes level by level.
  bfs(callback) {
    const queue = [];
    queue.push(this); // Start with the root node
    while (queue.length > 0) {
      let current = queue.shift(); // Dequeue the current node
      callback(current); // Process the current node

      // Enqueue the left child if it exists
      if (current.left !== null) queue.push(current.left);
      // ? How does the queue ensure that nodes are processed level by level?

      // Enqueue the right child if it exists
      if (current.right !== null) queue.push(current.right);
      // ? Why does breadth-first search use a queue instead of recursion?
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

// [7, 4, 10, 2, 1, 6, 5, 9, 8, 11]

// Pretty print the tree
tree.prettyPrint();

// // use bfs with a callback that console.logs the value
// tree.bfs((node) => console.log(node.value));

// use bfs with a callback that adds the values to an array and console.log the array
const bfsArray = [];
tree.bfs((node) => bfsArray.push(node.value));
console.log('breadthFirstSearch:', bfsArray);

// use depthFirstPre with a callback that adds the values to an array and console.log the array
const preArray = [];
tree.depthFirstPre((val) => preArray.push(val));
console.log('depthFirstPre:', preArray);

// use depthFirstin with a callback that adds the values to an array and console.log the array
const inArray = [];
tree.depthFirstIn((val) => inArray.push(val));
console.log('depthFirstIn:', inArray);

// use depthFirstPost with a callback that adds the values to an array and console.log the array
const postArray = [];
tree.depthFirstPost((val) => postArray.push(val));
console.log('depthFirstPost:', postArray);
