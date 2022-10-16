const assert = require('assert')
const intro = require('./introduction')

describe('introduction suit', function(){

    it('a) return you name', function(){
        var expectedMyName = ''

        expectedMyName = intro.getMyName()

        assert.equal(expectedMyName, 'Elisabet')
    })
})