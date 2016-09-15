const structure = require('../../structure')
const Queue = structure.Queue

let q1 = new Queue()
console.log(q1.isEmpty() === true)

q1.enqueue(1)
