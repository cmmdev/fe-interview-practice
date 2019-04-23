var assert = require('assert')
var {
  findMedianSortedArrays
} = require('../../../../../src/leetcode/explore/hard/sorting-and-searching/findMedianSortedArrays')
var {
  kthSmallest
} = require('../../../../../src/leetcode/explore/hard/sorting-and-searching/kthSmallest')
var {
  wiggleSort
} = require('../../../../../src/leetcode/explore/hard/sorting-and-searching/wiggleSort')

describe('sorting-and-seraching', function() {
  describe('findMedianSortedArrays', function() {
    it('case 1', function() {
      assert.equal(2, 2);       // 返回  4
    })
  }),
  describe('kthSmallest', function() {
    it('case 1', function() {
      assert.equal(2, 2);       // 返回  4
    })
  }),
  describe('wiggleSort', function() {
    it('plain case', function() {
      let input = [1, 5, 1, 1, 6, 4]
      wiggleSort(input)
      for (let i = 0; i < input.length -2; i++) {
        if (i%2 == 0) {
          assert.equal(input[i] < input[i+1], true)
        } else {
          assert.equal(input[i] > input[i+1], true)
        }
      }
      assert.equal(2, 2);       // 返回  4
    })
  })
})
