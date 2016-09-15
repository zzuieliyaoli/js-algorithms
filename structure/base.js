class Base {
  constructor() {
    this.items = []
  }
  add(item) {
    this.items.push(item)
  }
  remove() {
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}

module.exports = Base