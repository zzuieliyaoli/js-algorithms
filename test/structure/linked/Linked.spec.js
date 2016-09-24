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
      expect(l.first).to.equal(null)
      expect(l.N).to.equal(0)
    })
    describe('isEmpty()', () => {
      it('should be function', () => {
        expect(l.isEmpty).to.be.a('function')
      })
      it('should run correctly', () => {
        expect(l.isEmpty()).to.be.equal(true)
      })
    })

    // 只在这里验证属性的类型
    // 行为放在不同的数据结构内
    // 因为Linked没有添加等方法
    describe('iterator()', () => {
      it('should be function', () => {
        expect(l.iterator).to.be.a('function')
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
