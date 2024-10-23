// Create a helper 'linked list' to track our head and tail
class LinkedList {
  constructor() {
    // & The list starts empty, so both head and tail are null
    this.head = null;
    this.tail = null;
  }

  add(val) {
    // & Each time we add a value, we create a new node
    const newNode = new Node(val);

    // ? What will the head and tail represent in our list?
    // If the list is empty, the new node becomes both the head and the tail
    if (this.head === null) {
      this.head = this.tail = newNode;
      return; // & We stop here because we’ve set the only node in the list
    }

    // otherwise, we've got to add it where it belongs
    // ? Why is it important to check the correct position before inserting the node?

    // Does it belong at the beginning?
    if (this.head.value > val) {
      newNode.next = this.head; // & Set the new node to point to the current head
      this.head = newNode; // & The new node becomes the head
      // Does it belong at the end?
    } else if (this.tail.value < val) {
      this.tail.next = newNode; // & Attach the new node to the current tail
      this.tail = newNode; // & Update the tail to the new node
      // Does it belong somewhere in between?
    } else {
      let currentNode = this.head;

      // & We traverse the list to find where the new node fits
      while (currentNode.next) {
        // ? What happens if the new value is larger than the current node’s next value?
        if (val > currentNode.next.value) {
          currentNode = currentNode.next; // & Keep moving forward in the list
        } else {
          // & Insert the new node in its correct spot
          newNode.next = currentNode.next; // & New node points to the next node
          currentNode.next = newNode; // & Previous node now points to the new node
          return;
        }
      }
    }
  }

  print() {
    // & Traverse the list and print each node's value
    let current = this.head;
    while (current) {
      console.log(current.value); // ? What would happen if 'current' was null when we try to access current.value?
      current = current.next; // & Move to the next node
    }
  }
}

// Define what our nodes will contain
class Node {
  constructor(val) {
    // & Each node has a value and a pointer to the next node (initialized to null)
    this.value = val;
    this.next = null;
  }
}

// Create a new linked list
const ll = new LinkedList();

// Add some values to the linked list
ll.add("B");
ll.add("C");
ll.add("E");
ll.add("A");
ll.add("D");

// Print the linked list values in sorted order
ll.print();
