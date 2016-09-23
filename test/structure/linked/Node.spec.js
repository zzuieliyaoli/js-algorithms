const { src, expect, Node } = require('./utils')

let n
beforeEach(() => {
  n = new Node
})

describe('structure: Node', () => {
  it('should be function', () => {
    expect(Node).to.be.a('function')
  })

  it('should have default value', () => {
    expect(n.item).to.be.equal(null)
    expect(n.next).to.be.equal(null)
  })
})
