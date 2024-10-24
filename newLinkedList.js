// Define a node class that will be the building block of our LinkedList
class Node {
  constructor(val) {
    // & Each node will store a value and a pointer to the next node (initialized as null)
    this.val = val;
    this.next = null;
  }
}

// & Linked List class that keeps node sorted in ascending order
class SortedLinkedList {
  constructor() {
    // The LinkedList starts with no nodes, so both head and tail are null
    this.head = null;
    this.tail = null;
  }

  // & Adds a new value to the linked list, uses a previous and a focus pointer to traverse the list
  add(val) {
    const newNode = new Node(val); // & Create a new node with the given value

    // ^ If the list is empty, this new node becomes both the head and tail
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return; // We exit here because we've added the first node
    }

    // ^ If the new value is smaller than the head, it becomes the new head
    if (val < this.head.val) {
      const oldHead = this.head; // Temporarily store the old head
      this.head = newNode; // New node becomes the head
      this.head.next = oldHead; // Point new head to the old head
      return;
    }

    // ^ If the new value is larger than the tail, it becomes the new tail
    if (this.tail.val < val) {
      const oldTail = this.tail; // Temporarily store the old tail
      oldTail.next = newNode; // Attach the new node to the old tail
      this.tail = newNode; // New node becomes the tail
      return;
    }

    // ? How do we decide where in the list the new value should be placed?
    // ^ Traverse the list to find where to insert the new node
    let previous = this.head;
    let focus = this.head.next;

    // ^ Keep moving until we find the right spot for the new node
    while (focus !== null && focus.val < val) {
      previous = focus;
      focus = focus.next;
    }

    // ^ Insert the new node in the correct position
    previous.next = newNode;
    newNode.next = focus;
  }

  // & Adds a new value to the linked list, uses only a focus pointer to traverse the list
  add2(val) {
    // ^ Create a new node with the given value
    const newNode = new Node(val);

    // ^ If the list is empty, this new node becomes both the head and tail
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // ^ If the new value is smaller than the head, it becomes the new head
    if (val < this.head.val) {
      const oldHead = this.head; // Temporarily store the old head
      // ? Is saving the old head necessary here?
      this.head = newNode; // New node becomes the head
      this.head.next = oldHead; // Point new head to the old head
      return;
    }

    // ^ If the new value is larger than the tail, it becomes the new tail
    if (this.tail.val < val) {
      const oldTail = this.tail; // Temporarily store the old tail
      this.tail.next = newNode; // Attach the new node to the old tail
      this.tail = newNode; // New node becomes the tail
      return;
    }

    // ^ Traverse the list to find where to insert the new node
    let focus = this.head; // Start at the head of the list
    while (focus.next !== null && val > focus.next.val) {
      focus = focus.next; // Keep moving through the list until the new value is less than the next node
    }
    newNode.next = focus.next; // Insert the new node into the list
    focus.next = newNode; // Update the focus node to point to the new node
    return;
  }

  // & rewritten add2 method with no comments
  add3(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (val < this.head.val) {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      return;
    }

    if (this.tail.val < val) {
      const oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
      return;
    }

    let focus = this.head;
    while (focus.next !== null && val > focus.next.val) {
      focus = focus.next;
    }
    newNode.next = focus.next;
    focus.next = newNode;
    return;
  }

  // & find the middle node
  findMiddle() {
    if (this.head === null) return null; // return null if the list is empty
    let slow = this.head; // Start slow at the head of the list
    let fast = this.head; // Start fast at the head of the list

    // check if both fast.next and fast.next.next are not null - if they are, we've reached the end of the list
    // #region Explanation
    // for odd length lists, fast.next will be null when slow is at the middle node
    // for even length lists, fast.next.next will be null when slow is at the second middle node
    // #endregion
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next; // move slow one step
      fast = fast.next.next; // move fast two steps
    }

    return slow.val; // return the middle node
  }

  // & Print the linked list
  print() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += current.val;
      if (current.next !== null) {
        result += ' -> ';
      }
      current = current.next;
    }

    console.log(result); // ? How does this visualization help in understanding the list structure?
  }
}

// Create a new linked list
const linkedlist2 = new SortedLinkedList();
linkedlist2.add2('B');
linkedlist2.add2('C');
linkedlist2.add2('E');
linkedlist2.add2('A');
linkedlist2.add2('D');
console.log('\nlinkedlist2');
linkedlist2.print();
console.log('Middle Value is:', linkedlist2.findMiddle());

// create a new linked list with 10 elements, all integers from 1 to 50
const linkedlist3 = new SortedLinkedList();
// use math.random to generate random numbers to add to the linked list
for (let i = 0; i < 10; i++) {
  linkedlist3.add3(Math.floor(Math.random() * 50) + 1);
}
console.log('\nlinkedlist3');
linkedlist3.print();
console.log('Middle Value is:', linkedlist3.findMiddle());

// Uncomment the following line to see the char code for "B"
// const value = "B".charCodeAt(0);
// console.log(value);
