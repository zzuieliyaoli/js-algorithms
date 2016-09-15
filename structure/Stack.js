const Base = require('./Base')

class Stack extends Base{
  constructor() {
    super()
  }
  push(item) {
    this.add(item)
  } 
  pop() {
    this.items.pop()
  }
}

module.exports = Stack