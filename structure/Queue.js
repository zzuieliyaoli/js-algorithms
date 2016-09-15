const Base = require('./Base')

class Queue extends Base {
  constructor() {
    super()
  }
  enqueue(item) {
    this.add(item)
  }
  dequeue() {
    this.items.shift()
  }
}

module.exports = Queue