const { expect, Stack, Linked } = require('./utils')

let s
beforeEach(() => {
  s = new Stack()
})

describe('structure: Stack', () => {
  describe('basic function should run correctly', () => {
    it('extends Linked', () => {
      expect(Stack.prototype).to.be.an.instanceOf(Linked)
    })
    it('super()', () => {
      expect(s.first).to.equal(null)
      expect(s.N).to.equal(0)
    })
  })
  describe()
})
