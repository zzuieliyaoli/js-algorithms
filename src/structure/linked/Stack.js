const Linked = require('./Linked')
const Node = require('./Node')

class Stack extends Linked {
  constructor() {
    super()
  }
  push(item) {
    const oldFirst = this.first
    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
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
