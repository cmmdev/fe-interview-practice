/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x == 0) return true
  if (x < 0) return false

  let ret = []
  let num = x

  while (num) {
    let time = Math.floor(num / 10)
    let rem = num % 10
    ret.push(rem)

    num = time
  }

  for (let i = 0; i < ret.length / 2; i++) {
    if (ret[i] != ret[ret.length - 1 - i]) return false
  }
  return true
}
