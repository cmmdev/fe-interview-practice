var assert = require('assert')
var {
  spiralOrder
} = require('../../../../../src/leetcode/explore/hard/array-and-strings/spiralOrder')

describe('array and strings', function() {
  describe('spiralOrder', function() {
    it('case 4x4', function() {
      let input = [
        [1, 2, 3, 4],
        [4, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
      output = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 4, 6, 7, 11, 10]
      assert.equal(spiralOrder(input).join(','), output.join(','))
    }),
    it('case 2x2', function() {
      let input = [
        [1, 2],
        [3,4]
      ]
      output = [1, 2, 4,3]
      assert.equal(spiralOrder(input).join(','), output.join(','))
    })
  })
})
