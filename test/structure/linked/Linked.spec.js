const { expect, Node, Linked } = require('./utils')

let l
beforeEach(() => {
  l = new Linked()
})

describe('structure: Linked', () => {
  it('should be function', () => {
    expect(Linked).to.be.a('function')
  })
  describe('should have correct methods', () => {
    it('constructor()', () => {
      expect(l.first).to.be.an.instanceOf(Node)
      expect(l.N).to.equal(0)
    })
    it('interator()', () => {
      expect(l.interator).to.be.a('function')
    })
    describe('isEmpty()', () => {
      it('should be function', () => {
        expect(l.isEmpty).to.be.a('function')
      })
      it('should run correctly', () => {
        expect(l.isEmpty()).to.be.equal(true)
      })
    })
    describe('size()', () => {
      it('should be function', () => {
        expect(l.size).to.be.a('function')
      })
      it('should run correctly', () => {
        expect(l.size()).to.be.equal(0)
      })
    })
  })
})
