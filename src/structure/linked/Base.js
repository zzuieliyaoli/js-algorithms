class Node {
  constructor() {
    this.item = null;
    this.next = null;
  }
}

class Base {
  constructor() {
    this.first = new Node();
    this.N = 1
  }
  isEmpty() {
    return (this.first.next === null);
  }
  interator() {
  }
  size() {
    return this.N
  }
}

module.exports = {
  Node,
  Base
}