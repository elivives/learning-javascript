const assert = require('assert')
const intro = require('./introduction')

describe('introduction suit', function(){

    it('a) return your name', function(){
        var expectedMyName = ''

        expectedMyName = intro.getMyName()

        assert.equal(expectedMyName, 'Elisabet')
    })
    it('b) return your age', function(){
        var expectedMyAge = 0

        expectedMyAge = intro.getMyAge()

        assert.equal(expectedMyAge, 25)
    })

    it('c) return your first name, last name and your age in an array', function(){
        var expectedMyNameAndAge = []
        
        expectedMyNameAndAge = intro.getMyNameLastNameAndAgeArray()

        assert.deepEqual(expectedMyNameAndAge, ['Elisabet', 'Vives', 25])
    })

    it(' return your name and your age inside an object', function(){
        var expectedPerson = {}

        expectedPerson = intro.getPerson()

        assert.deepEqual(expectedPerson, {name: 'Elisabet', age: 24})
    })
})