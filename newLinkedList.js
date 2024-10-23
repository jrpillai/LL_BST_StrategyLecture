class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {
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

    let previous = this.head;
    let focus = this.head.next;

    while (focus !== null && focus.val < val) {
      previous = focus;
      focus = focus.next;
    }

    previous.next = newNode;
    newNode.next = focus;
  }

  add2(val) {
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

    console.log(result);
  }
}

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

// const value = "B".charCodeAt(0);
// console.log(value);
