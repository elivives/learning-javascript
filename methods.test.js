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

    it('d) Show name and lastname, and add lastname', function(){
        var name = 'Marta Vazquez'
        var expectedNameAndLastname = ''

        expectedNameAndLastname = methods.getNameAndLastname(name)

        assert.equal(expectedNameAndLastname, "Marta Vazquez, Vazquez")
    })

    it('e) Change your name for Mr./Ms', function(){
        var name = 'Elisabet Vives'
        var expectedName = ''

        expectedName = methods.isYourName(name)

        assert.equal(expectedName, 'Ms. Elisabet')
    })

    it('f) transform it to UPPERCASE your surname', function(){
        var name = 'Elisabet Vives'
        var expectetlastname = ''

        expectetlastname = methods.getYourSurnameUppercase(name)

        assert.equal(expectetlastname, 'VIVES')
    })

    it('g) select the initial of your name and surname', function(){
        var name = 'Elisabet Vives'
        var expectedInitial = ''

        expectedInitial = methods.getYourInitial(name)

        assert.equal(expectedInitial, 'E.V')
    })

    // ARRAY

    it('a) show your name and separating each letter by "/"', function(){
        var name = 'Elisabet'
        var espectedNameArray = []

        espectedNameArray = methods.getNameSeparate(name)

        assert.equal(espectedNameArray, 'E/ L/ I/ S/ A/ B/ E/ T')
    })

    it('b) show you surname separating each letter by "|"', function() {
        var name = 'Elisabet Vives'
        var espectedSurnameArray = []

        espectedSurnameArray = methods.getSurnameSeparate(name)

        assert.equal(espectedSurnameArray, 'V| I| V| E| S')
    })
})
