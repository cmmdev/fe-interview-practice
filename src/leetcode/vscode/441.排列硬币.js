/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let start = 0;
  let end = Math.ceil(Math.sqrt(2*n));
  while (true) {
    let ret = Math.floor((start+end)/2);
    let lower = ret*(ret+1)/2
    let upper = (ret+1)*(ret+2)/2
    if (lower <= n &&  upper > n) {
      return ret
    } else if (upper <= n) {
      start = ret+1
    } else {
      end = ret-1
    }
  }
  return -1
};

// 1
// 2
// 3


