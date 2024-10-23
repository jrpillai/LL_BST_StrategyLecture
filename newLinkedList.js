// Define a node class that will be the building block of our LinkedList
class Node {
  constructor(val) {
    // & Each node will store a value and a pointer to the next node (initialized as null)
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // & The LinkedList starts with no nodes, so both head and tail are null
    this.head = null;
    this.tail = null;
  }

  add(val) {
    const newNode = new Node(val); // & Create a new node with the given value

    // & If the list is empty, this new node becomes both the head and tail
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return; // & We exit here because we've added the first node
    }

    // & If the new value is smaller than the head, it becomes the new head
    if (val < this.head.val) {
      const oldHead = this.head; // & Temporarily store the old head
      this.head = newNode; // & New node becomes the head
      this.head.next = oldHead; // & Point new head to the old head
      return;
    }

    // & If the new value is larger than the tail, it becomes the new tail
    if (this.tail.val < val) {
      const oldTail = this.tail; // & Temporarily store the old tail
      oldTail.next = newNode; // & Attach the new node to the old tail
      this.tail = newNode; // & New node becomes the tail
      return;
    }

    // ? How do we decide where in the list the new value should be placed?
    // & Traverse the list to find where to insert the new node
    let previous = this.head;
    let focus = this.head.next;

    // & Keep moving until we find the right spot for the new node
    while (focus !== null && focus.val < val) {
      previous = focus;
      focus = focus.next;
    }

    // & Insert the new node in the correct position
    previous.next = newNode;
    newNode.next = focus;
  }

  add2(val) {
    const newNode = new Node(val); // & Similar setup as the add method

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

    // & Unlike add, here we only keep track of the focus node without previous
    let focus = this.head;
    while (focus.next !== null && val > focus.next.val) {
      focus = focus.next; // & Keep moving through the list until the right spot is found
    }
    newNode.next = focus.next; // & Insert the new node into the list
    focus.next = newNode; //
    return;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.val;
      if (current.next !== null) {
        result += " -> ";
      }
      current = current.next;
    }

    console.log(result); // ? How does this visualization help in understanding the list structure?
  }
}

// Create two linked lists to demonstrate different add methods
const linkedlist1 = new LinkedList();
linkedlist1.add("B");
linkedlist1.add("C");
linkedlist1.add("E");
linkedlist1.add("A");
linkedlist1.add("D");
console.log("linkedlist1");
linkedlist1.print();

const linkedlist2 = new LinkedList();
linkedlist2.add2("B");
linkedlist2.add2("C");
linkedlist2.add2("E");
linkedlist2.add2("A");
linkedlist2.add2("D");
console.log("linkedlist2");
linkedlist2.print();

// Uncomment the following line to see the char code for "B"
// const value = "B".charCodeAt(0);
// console.log(value);
