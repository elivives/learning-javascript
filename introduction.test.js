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
})