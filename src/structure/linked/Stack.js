const Base = require('./Base').Base
const Node = require('./Base').Node

class Stack extends Base {
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
  }
  pop() {
    const item = this.first.item
    this.first = this.first.next
    this.N = this.N - 1
    reurn item
  }
}
