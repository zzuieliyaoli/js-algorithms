const { expect, Queue } = require('./utils')

let q
beforeEach(() => {
  q = new Queue()
})

describe('structure: Queue', () => {
  it('isEmpty()', () => {
    expect(q.isEmpty()).to.deep.equal(true)
  })
  describe('enqueue()', () => {
    it('run once', () => {
      q.enqueue(1)
      expect(q).to.deep.equal({
        first: { item: 1, next: null },
        N: 1,
        last: q.first
      })
    })
    it('run twice', () => {
      q.enqueue(1).enqueue(2)
      expect(q).to.deep.equal({
        first: { item: 1, next: q.last },
        N: 2,
        last: {
          item: 2,
          next: null
        }
      })
    })
    it('run three times', () => {
      q.enqueue(1).enqueue(2).enqueue(3)
      expect(q).to.deep.equal({
        first: { item: 1, next: { item: 2, next: q.last } },
        N: 3,
        last: {
          item: 3,
          next: null
        }
      })
    })
  })
  it('dequeue()', () => {
    q.enqueue(1).dequeue()
    expect(q.isEmpty()).to.equal(true)
    q.enqueue(1).enqueue(2).dequeue()
    expect(q).to.deep.equal({
      N: 1,
      first: {
        item: 2,
        next: null
      },
      last: q.first
    })
  })
})
