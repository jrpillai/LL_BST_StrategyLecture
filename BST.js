class Leaf {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    // create the new leaf we're going to add to the tree
    const leaf = new Leaf(value);
    // if the value for the new leaf is greater than the current leaf we're examining
    if (value > this.value) {
      // drop it on the right if there's not something there.  If there is, keep looking for a spot
      this.right === null ? (this.right = leaf) : this.right.add(value);
    } else {
      // if the value for the new leaf is less than the current leaf we'r examining
      // drop it on the left if there's not something there.  If there is, keep looking for a spot
      this.left === null ? (this.left = leaf) : this.left.add(value);
    }
  }

  // breadth-first search - callback can be whatever we want to do when we 'visit' a node
  bfs(callback) {
    // set up our FIFO queue to track which nodes we want to visit in level order
    const queue = [];
    queue.push(this); // start by putting the root node in queue

    while (queue.length > 0) {
      // start at the beginning of the FIFO queue
      let current = queue[0];

      // push the children of the current node into the back of the queue
      if (current.left) queue.push(current.left);

      if (current.right) queue.push(current.right);

      // now we can 'visit' the first node on the queue...
      callback(current.value);
      // ...before pulling it off the front
      queue.shift();
    }
  }
}

//        20
//    10      30
//  8   15       40
//             37

const tree = new Leaf(20);
tree.add(30);
tree.add(10);
tree.add(40);
tree.add(15);
tree.add(37);
tree.add(8);

tree.bfs((val) => console.log(val));
