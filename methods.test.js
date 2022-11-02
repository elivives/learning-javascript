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

    it('c)show each letter of your name with its position', function(){
        var name = 'Elisabet Vives'
        var namePosition = ''

        namePosition = methods.getNamePosition(name)

        assert.equal(namePosition, '1ºE, 2ºL, 3ºI, 4ºS, 5ºA, 6ºB, 7ºE, 8ºT')
    })

    it('c-2)show each letter of your name with its position in array', function() {
        var name = 'Elisabet Vives'
        var namePosition = []

        namePosition = methods.getNamePositionArray(name)

        assert.deepEqual(namePosition, ['1ºE, ', '2ºL, ', '3ºI, ', '4ºS, ', '5ºA, ', '6ºB, ', '7ºE, ', '8ºT'])

    })

    it('d) Show each letter of your surname with its position', function() {
        var name = 'Elisabet Vives'
        var surnamePosition = ''

        surnamePosition = methods.getSurnamePosition(name)

        assert.equal(surnamePosition, '1ºV, 2ºI, 3ºV, 4ºE, 5ºS')
    })

    it('d-2) show eash letters of your surname with its position in array', function(){
        var name = 'Elisabet Vives'
        var surnamePosition = []

        surnamePosition = methods.getSurnamePositionArray(name)

        assert.deepEqual(surnamePosition, ['1ºV, ', '2ºI, ', '3ºV, ', '4ºE, ', '5ºS'])
    })

    it('e)show me the initials of your name and surname', function() {
        var name = 'Elisabet Vives'
        var nameInitials = ''

        nameInitials = methods.getYourInitialsArray(name)

        assert.equal(nameInitials, 'E.V')
    })

    it('f) Entering your name in the first position, your last name in the second, and also add your age in another position. Show only your name and your age on the screen in a single message', function() {
        var name = ['Elisabet', 'Vives', 27]
        var nameAndAge = []

        nameAndAge = methods.getYourNameAndAge(name)

        assert.equal(nameAndAge, ['My name is Elisabet and I\'m 27 years old'])
    })
    it('g) Show function to add your City to the array', function() {
        var name = ['Elisabet', 'Vives', 27]
        var city = []

        city = methods.addYourCity(name, 'Barcelona')

        assert.deepEqual(city, ['Elisabet', 'Vives', 27, 'Barcelona'])
    })
    it('g-1) Show function to add your City to the array', function() {
        var name = ['Elisabet', 'Vives', 27]
        var city = []

        city = methods.addYourCity(name, 'Madrit')

        assert.deepEqual(city, ['Elisabet', 'Vives', 27, 'Madrit'])
    })
    it('h) remove the City variable and commit the changes.', function() {
        var personalData = ['Elisabet', 'Vives', 27, 'Barcelona']
        var city = []

        city = methods.deleteYourCity(personalData, 'Barcelona')

        assert.deepEqual(city, ['Elisabet', 'Vives', 27])
    })
    it('j)remove the name and commit the changes', function(){
        var personalData = ['Elisabet', 'Vives', 27]
        var name = []

        name = methods.deleteYourName(personalData, 'Elisabet')

        assert.deepEqual(name, ['Vives', 27])
    })
})
