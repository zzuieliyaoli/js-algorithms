const Linked = require('./Linked')
const Node = require('./Node')

class Queue extends Linked {
  constructor() {
    super()
    this.last = null
  }
  enqueue(item) {
    const oldLast = this.last
    this.last = new Node()
    this.last.item = item
    this.last.next = null
    if (this.isEmpty() === true) {
      this.first = this.last
    } else {
      oldLast.next = this.last
    }
    this.N = this.N + 1
    return this
  }
  dequeue() {
    const item = this.first.item
    this.first = this.first.next
    if (this.isEmpty() === true) {
      this.last = null
    }
    this.N = this.N - 1
    return item
  }
}

module.exports = Queue
