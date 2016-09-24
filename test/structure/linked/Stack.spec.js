const { expect, Stack, Linked } = require('./utils')

let s
let iterator
beforeEach(() => {
  s = new Stack()
  iterator = s.iterator()
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
  describe('push()', () => {
    it('should be function', () => {
      expect(s.push).to.be.a('function')
    })
    describe('should run correctly', () => {
      it('run once', () => {
        s.push(1)
        expect(s).to.deep.equal({
          first: { item: 1, next: null }, N: 1
        })
      })
      it('run twice', () => {
        s.push(1).push(2)
        expect(s).to.deep.equal({
          first: { item: 2, next: { item: 1,  next: null } },
          N: 2
        })
      })
    })
  })
  describe('pop()', () => {
    it('should be function', () => {
      expect(s.pop).to.be.a('function')
    })
    describe('should run correctly', () => {
      it('push() pop()', () => {
        s.push(1).pop()
        expect(s.first).to.equal(null)
        expect(s.N).to.equal(0)
      })
      it('push() push() pop()', () => {
        s.push(1).push(2).pop()
        expect(s).to.deep.equal({
          first: { item: 1, next: null }, N: 1
        })
      })
      it('push() pop() push()', () => {
        s.push(1).pop()
        s.push(2)
        expect(s).to.deep.equal({
          first: { item: 2, next: null }, N: 1
        })
      })
    })
  })
  describe('iterator()', () => {
    it('should be function', () => {
      expect(s.iterator).to.be.a('function')
    })
    describe('should return Iterator', () => {
      it('hasNext', () => {
        expect(iterator.hasNext).to.be.a('function')
      })
      it('next', () => {
        expect(iterator.next).to.be.a('function')
      })
      it('remove', () => {
        expect(iterator.remove).to.be.a('function')
      })
    })
  })
})
