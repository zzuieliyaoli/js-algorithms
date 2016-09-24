const Linked = require('./Linked')
const Node = require('./Node')

class Stack extends Linked {
  constructor() {
    super()
  }
  push(item) {
    let oldFirst = this.first
    let first = new Node()
    first.item = item
    first.next = oldFirst
    this.first = first
    this.N = this.N + 1
    return this
  }
  pop() {
    const item = this.first.item
    this.first = this.first.next
    this.N = this.N - 1
    return item
  }
}

module.exports = Stack
