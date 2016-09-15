const Base = require('../../structure').Base
const expect = require('chai').expect

const base = new Base();

describe('Structure Base', () => {
  it('should construct correct base items', () => {
      expect(base.items).to.be.an('array')
      expect(base.items.length).to.equal(0)
  })
  it('should have correct method: add', () => {
    expect(base.add).to.be.a('function')
  })
  it('should have correct method: remove', () => {
    expect(base.remove).to.be.a('function')
  })
  it('should have correct method: isEmpty', () => {
    expect(base.isEmpty).to.be.a('function')
    expect(base.isEmpty()).to.equal(true)
  })
  it('should have correct method: size', () => {
    expect(base.size).to.be.a('function')
    expect(base.size()).to.equal(0)
  })
})
