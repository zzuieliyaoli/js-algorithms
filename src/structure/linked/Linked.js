const Node = require('./Node')

class Linked {
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

module.exports = Linked
