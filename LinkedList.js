// Create a helper 'linked list' to track our head and tail
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
    // create the new node
    const newNode = new Node(val);
    // Is this the first node in our list?
    if (this.head === null) {
      this.head = this.tail = newNode;
      return;
    }

    // otherwise, we've got to add it where it belongs

    // Does it belong at the beginning?
    if (this.head.value > val) {
      newNode.next = this.head;
      this.head = newNode;
      // Does it belong at the end?
    } else if (this.tail.value < val) {
      this.tail.next = newNode;
      this.tail = newNode;
      // Does it belong somewhere in between?
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        if (val > currentNode.next.value) {
          currentNode = currentNode.next;
        } else {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        }
      }
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Define what our nodes will contain
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const ll = new LinkedList();

ll.add("B");
ll.add("C");
ll.add("E");
ll.add("A");
ll.add("D");
ll.print();
