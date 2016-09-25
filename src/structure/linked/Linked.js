class Linked {
  constructor() {
    this.first = null
    this.N = 0
  }
  isEmpty() {
    return (this.first === null)
  }
  iterator() {
    let current = this.first
    return {
      hasNext: () =>( current !== null ),
      next: () => {
        const item = current.item
        current = current.next
        return item
      },
      remove: () => {}
    }
  }
  size() {
    return this.N
  }
}

module.exports = Linked
