const { expect, Bag } = require('./utils')

let b
beforeEach(() => {
  b = new Bag()
})

describe('structure: Bag', () => {
  it('isEmpty()', () => {
    expect(b.isEmpty()).to.deep.equal(true)
  })
  describe('add()', () => {
    it('run once', () => {
      b.add(1)
      expect(b).to.deep.equal({
        N: 1,
        first: {
          item: 1,
          next: null
        }
      })
    })
    it('run twice', () => {
      b.add(1).add(2)
      expect(b).to.deep.equal({
        N: 2,
        first: {
          item: 2,
          next: {
            item: 1,
            next: null
          }
        }
      })
    })
    it('run three times', () => {
      b.add(1).add(2).add(3)
      expect(b).to.deep.equal({
        N: 3,
        first: {
          item: 3,
          next: {
            item: 2,
            next: {
              item: 1,
              next: null
            }
          }
        }
      })
    })
  })
})
