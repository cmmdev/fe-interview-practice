var assert = require('assert')
var { add } = require('../src/add.js')
describe('add', function() {
    describe('test add', function() {
        it('3+9 == 12', function() {
            assert.equal(add(3, 9), 12)
        })
    })
})
