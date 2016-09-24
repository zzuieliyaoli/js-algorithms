const Node = require('./Node')

class Linked {
  constructor() {
    this.first = null
    this.N = 0
  }
  isEmpty() {
    return (this.first === null);
  }
  interator() {
    let current = this.first
    return {
      hasNext: () =>( current.next !== null ),
      next: () => {
        let item = current.item
        current = current.next
        return item
      },
      remove: () => {
      }
    }
  }
  size() {
    return this.N
  }
}

module.exports = Linked
