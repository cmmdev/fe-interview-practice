/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n == 0) return 1
  if (n < 0) return 1 / myPow(x, -n)

  // n的二进制表示
  let bits = []
  let time = n
  while (time) {
    bits.push(time % 2)
    time = Math.floor(time / 2)
  }

  let base = [x]
  let ret = bits[0] ? x : 1;

  for (let i = 1; i < bits.length; i++) {
    base[i] = base[i-1]*base[i-1]
    if (bits[i]) {
      ret *= base[i];
    }
  }
  return ret
}
