const assert = require ('assert')
const methods = require ('./methods')

describe('methods suit', function(){

    // String

    it('a) count how many letters has Maria', function(){
        var name = 'Maria'
        var expectedNameNumbers = 0

        expectedNameNumbers = methods.getLettersNumbers(name)

        assert.equal(expectedNameNumbers, 5)
    })

    it('b) Add the lastname said position in string', function(){
        var name = "Marta Vazquez"
        var expectedLastname = 0

        expectedLastname = methods.posicionLastname(name)

        assert.equal(expectedLastname, 5)
    })

    it('b-1.- Add the lastname said position in string', function(){
        var name = "Joan Puig"
        var expectedLastname = 0

        expectedLastname = methods.posicionLastname(name)

        assert.equal(expectedLastname, 4)
    })

    it('c) show only name', function(){
        var name ='Marta Vazquez'
        var expectedName = ''

        expectedName = methods.isName(name)

        assert.equal(expectedName, 'Marta')
    })
})