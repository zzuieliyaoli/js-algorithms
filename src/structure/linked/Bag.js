const Linked = require('./Linked')
const Node = require('./Node')

class Bag extends Linked {
  constructor() {
    super()
  }
  add(item) {
    const oldFirst = this.first
    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
    this.N = this.N + 1
    return this
  }
}

module.exports = Bag
