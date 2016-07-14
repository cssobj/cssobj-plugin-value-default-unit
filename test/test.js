var expect = require('chai').expect
var addUnit = require('../cjs/cssobj-plugin-value-default-unit.js')

describe('default value test', function() {

  it('should add default unit for width', function() {

    var ret = addUnit()(23, 'width')
    expect(ret).equal('23px')

    var ret = addUnit()(23, 'height')
    expect(ret).equal('23px')

    var ret = addUnit()(23, 'marginBottom')
    expect(ret).equal('23px')

  })



  it('should add custom unit for width', function() {

    var ret = addUnit('em')(23, 'width')
    expect(ret).equal('23em')

    var ret = addUnit('em')(23, 'height')
    expect(ret).equal('23em')

  })


  it('should ignore for opacity, zIndex', function() {

    var ret = addUnit()(.5, 'opacity')
    expect(ret).equal(.5)

    var ret = addUnit()(999, 'zIndex')
    expect(ret).equal(999)

  })

  it('should allow vendor prefix like -ms-,-o-', function() {

    var ret = addUnit()(.5, 'Oopacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, 'OOpacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, 'MsOpacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, 'Msopacity')
    expect(ret).equal(.5)

    var ret = addUnit()(999, 'MsZIndex')
    expect(ret).equal(999)

  })

  it('should allow css hacks',function() {

    var ret = addUnit()(.5, '_opacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, '*opacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, '__opacity')
    expect(ret).equal(.5)

    var ret = addUnit()(.5, '__opacity\\0/')
    expect(ret).equal(.5)

    var ret = addUnit()(999, '__zIndex\\0/')
    expect(ret).equal(999)

  })

})
