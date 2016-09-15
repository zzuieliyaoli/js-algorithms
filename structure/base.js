class Base {
  constructor() {
    this.items = []
  }
  add() {
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