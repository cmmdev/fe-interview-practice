var assert = require('assert')
var {
  LRUCache
} = require('../../../../../src/leetcode/explore/hard/design/LRUCache')

describe('design', function() {
  describe('LRUCache', function() {
    it('case 1', function() {
      let cache = new LRUCache( 2 )
      cache.put(1, 1);
      cache.put(2, 2);
      assert.equal(cache.get(1), 1);       // 返回  1
      cache.put(3, 3);    // 该操作会使得密钥 2 作废
      assert.equal(cache.get(2), -1);       // 返回 -1 (未找到)
      cache.put(4, 4);    // 该操作会使得密钥 1 作废
      assert.equal(cache.get(1), -1);       // 返回 -1 (未找到)
      assert.equal(cache.get(3),3);       // 返回  3
      assert.equal(cache.get(4), 4);       // 返回  4
    })
  })
})
