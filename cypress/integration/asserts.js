/// <reference types="cypress"/>

describe('Assert examples', () => {
  function somaInteiros(p1, p2) {
    return p1 + p2
  }

  it("Equality", function() {
    expect(somaInteiros(2, 5)).to.eq(7)
		expect(somaInteiros(2, 5)).to.equal(7)
		expect(somaInteiros(2, 5)).to.be.equal(7)
  })

  it("Truthy", function() {
    const a = true
    const b = null
    let c

    expect(a).to.be.true;
    expect(a).not.to.be.null;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
  })

  it("Object Equality", function() {
    const obj = {
      a: 1,
      b: 2
    }

    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ b: 2 })
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).not.to.be.empty
  })
  
  it("Arrays", function() {
    const arr = [ 1, 2, 3 ]
    
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).not.to.be.empty
    expect([]).to.be.empty
  })

  it("Types", function() {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
  })

  it("String", function() {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
  })

  it("Numbers", function() {
    const num = 4
    const floatNum = 5.2123

    expect(num).to.be.equal(4)
    expect(num).to.be.above(3)
    expect(num).to.be.below(5)
    expect(floatNum).to.be.equal(5.2123)
    expect(floatNum).to.be.closeTo(5.2, 0.1)
  })
})