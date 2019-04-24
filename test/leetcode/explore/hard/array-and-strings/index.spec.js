var assert = require('assert')
var {
  spiralOrder
} = require('../../../../../src/leetcode/explore/hard/array-and-strings/spiralOrder')
var {
  longestConsecutive
} = require('../../../../../src/leetcode/explore/hard/array-and-strings/longestConsecutive')
var {
  productExceptSelf
} = require('../../../../../src/leetcode/explore/hard/array-and-strings/productExceptSelf')


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

  describe('longestConsecutive', function() {
    it('case 1', function() {
      let input = [4, 1, 2, 0, 1, 5, 1, 2, 3]
      output = 6
      assert.equal(longestConsecutive(input), output)
    }),
      it('case 2', function() {
        let input = [-4,-1, 4,-5,1,-6,9,-6,0,2,2,7,0,9,-3,8,9,-2,-6,5,0,3,4,-2]
        output = 12
        assert.equal(longestConsecutive(input), output)
      }),
      it('case 3', function() {
        let input = [-2,-3,-3,7,-3,0,5,0,-8,-4,-1,2]
        output = 5
        assert.equal(longestConsecutive(input), output)
      })
  })
  describe('productExceptSelf', function() {
    it('case 1', function() {
      let input = [2, 1, 3, 4]
      output = [12, 24, 8, 6]
      assert.equal(productExceptSelf(input).join(','), output.join(','))
    })
  })

  
})
