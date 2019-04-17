var assert = require('assert')
var { add } = require('../src/add.js')

describe('add without +/-', function() {
    describe('test add', function() {
        it('3+9 == 12', function() {
            assert.equal(add(3, 9), 12)
        });
        it('3-9 == -6', function() {
            assert.equal(add(3, -9), -6)
        })
        it('-3-9 == -12', function() {
            assert.equal(add(-3, -9), -12)
        })
    })
})
